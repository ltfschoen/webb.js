use arkworks_circuits::setup::common::Leaf;
use core::fmt;
use std::str::FromStr;

use js_sys::{JsString, Uint8Array};
use rand::rngs::OsRng;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

use crate::types::{
	Backend, Curve, HashFunction, NoteProtocol, NoteVersion, OpStatusCode, OperationError, Protocol, Version,
	WasmCurve, BE, HF,
};

mod anchor;
pub mod mixer;

impl JsNote {
	/// Deseralize note from a string
	pub fn deserialize(note: &str) -> Result<Self, OpStatusCode> {
		note.parse().map_err(Into::into)
	}

	pub fn get_leaf_and_nullifier(&self) -> Result<Leaf, OperationError> {
		match self.protocol {
			NoteProtocol::Mixer => {
				let secrets_string: String = self.secrets.join("");
				let secrets_raw = hex::decode(secrets_string).unwrap_or_default();
				mixer::get_leaf_with_private_raw(
					self.curve.unwrap_or(Curve::Bn254),
					self.width.unwrap_or(5),
					self.exponentiation.unwrap_or(5),
					&secrets_raw[..],
				)
			}
			NoteProtocol::Anchor => {
				let secrets_string: String = self.secrets.join("");
				let secrets_raw = hex::decode(secrets_string).unwrap_or_default();
				anchor::get_leaf_with_private_raw(
					self.curve.unwrap_or(Curve::Bn254),
					self.width.unwrap_or(5),
					self.exponentiation.unwrap_or(5),
					&secrets_raw[..],
					self.target_chain_id.parse().unwrap(),
				)
			}
			_ => {
				let message = format!("{} protocol isn't supported yet", self.protocol);
				Err(OperationError::new_with_message(
					OpStatusCode::FailedToGenerateTheLeaf,
					message,
				))
			}
		}
	}
}

impl fmt::Display for JsNote {
	fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
		// Note URI scheme
		let scheme = "webb://";
		// Note URI authority
		let authority = vec![self.version.to_string(), self.protocol.to_string()].join(":");
		// Note URI chain IDs
		let chain_ids = vec![self.source_chain_id.to_string(), self.target_chain_id.to_string()].join(":");
		// Note URI chain identifying data (smart contracts, tree IDs)
		let chain_identifying_data = vec![
			self.source_identifying_data.to_string(),
			self.target_identifying_data.to_string(),
		]
		.join(":");

		let secrets = &self
			.secrets
			.iter()
			.map(|s| hex::encode(s))
			.collect::<Vec<String>>()
			.join(":");

		// Note URI miscellaneous queries
		let misc_values = vec![
			if self.curve.is_some() {
				format!("curve={}", self.curve.unwrap())
			} else {
				"".to_string()
			},
			if self.width.is_some() {
				format!("width={}", self.width.unwrap())
			} else {
				"".to_string()
			},
			if self.exponentiation.is_some() {
				format!("exp={}", self.exponentiation.unwrap())
			} else {
				"".to_string()
			},
			if self.hash_function.is_some() {
				format!("hf={}", self.hash_function.unwrap().to_string())
			} else {
				"".to_string()
			},
			if self.backend.is_some() {
				format!("backend={}", self.backend.unwrap().to_string())
			} else {
				"".to_string()
			},
			if self.token_symbol.is_some() {
				format!("token={}", self.token_symbol.clone().unwrap().to_string())
			} else {
				"".to_string()
			},
			if self.denomination.is_some() {
				format!("denom={}", self.denomination.unwrap().to_string())
			} else {
				"".to_string()
			},
			if self.amount.is_some() {
				format!("amount={}", self.amount.clone().unwrap().to_string())
			} else {
				"".to_string()
			},
		]
		.iter()
		.filter(|v| v.len() > 0)
		.map(|v| v.clone())
		.collect::<Vec<String>>()
		.join("&");
		// Note URI queries are prefixed with `?`
		let misc = vec!["?".to_string(), misc_values].join("");

		let parts: Vec<String> = vec![
			authority.to_string(),
			chain_ids.to_string(),
			chain_identifying_data.to_string(),
			secrets.to_string(),
			misc.to_string(),
		];
		// Join the parts with `/` and connect to the scheme as is
		let note = vec![scheme.to_string(), parts.join("/")].join("");
		write!(f, "{}", note)
	}
}

impl FromStr for JsNote {
	type Err = OpStatusCode;

	fn from_str(s: &str) -> Result<Self, Self::Err> {
		let scheme_and_parts: Vec<&str> = s.split("://").collect();
		let scheme = scheme_and_parts[0];

		let parts: Vec<&str> = scheme_and_parts[1].split("/").collect();
		if parts.len() < 5 {
			return Err(OpStatusCode::InvalidNoteLength);
		}
		// Raw parts
		let authority = parts[0];
		let chain_ids = parts[1];
		let chain_identifying_data = parts[2];
		let secrets = parts[3];
		let misc = parts[4].replace("?", "");

		// Authority parsing
		let authority_parts: Vec<&str> = authority.split(":").collect();
		assert_eq!(authority_parts.len(), 2, "Invalid authority length");
		let version = NoteVersion::from_str(authority_parts[0])?;
		let protocol = NoteProtocol::from_str(authority_parts[1])?;

		// Chain IDs parsing
		let chain_ids_parts: Vec<&str> = chain_ids.split(":").collect();
		assert_eq!(chain_ids_parts.len(), 2, "Invalid chain IDs length");
		let source_chain_id = chain_ids_parts[0];
		let target_chain_id = chain_ids_parts[1];

		// Chain Identifying Data parsing
		let chain_identifying_data_parts: Vec<&str> = chain_identifying_data.split(":").collect();
		assert_eq!(
			chain_identifying_data_parts.len(),
			2,
			"Invalid chain identifying data length"
		);
		let source_identifying_data = chain_identifying_data_parts[0];
		let target_identifying_data = chain_identifying_data_parts[1];

		// Misc data parsing
		let misc_parts: Vec<&str> = misc.split("&").collect();
		let mut curve = None;
		let mut width = None;
		let mut exponentiation = None;
		let mut hash_function = None;
		let mut backend = None;
		let mut token_symbol = None;
		let mut denomination = None;
		let mut amount = None;

		for part in misc_parts {
			let part_parts: Vec<&str> = part.split("=").collect();
			assert_eq!(part_parts.len(), 2, "Invalid misc data length");
			let key = part_parts[0];
			let value = part_parts[1];
			println!("{}={}", key, value);
			match key {
				"curve" => curve = Some(value),
				"width" => width = Some(value),
				"exp" => exponentiation = Some(value),
				"hf" => hash_function = Some(value),
				"backend" => backend = Some(value),
				"token" => token_symbol = Some(value),
				"denom" => denomination = Some(value),
				"amount" => amount = Some(value),
				_ => return Err(OpStatusCode::InvalidNoteMiscData),
			}
		}

		let secret_parts: Vec<String> = secrets
			.split(":")
			.collect::<Vec<&str>>()
			.iter()
			.map(|v| v.to_string())
			.collect::<Vec<String>>();

		Ok(JsNote {
			scheme: scheme.to_string(),
			protocol,
			version,
			target_chain_id: target_chain_id.to_string(),
			source_chain_id: source_chain_id.to_string(),
			source_identifying_data: source_identifying_data.to_string(),
			target_identifying_data: target_identifying_data.to_string(),
			token_symbol: token_symbol.map(|v| v.to_string()),
			curve: curve.map(|v| v.parse::<Curve>().unwrap()),
			hash_function: hash_function.map(|v| HashFunction::from_str(v).unwrap()),
			backend: backend.map(|b| b.parse().unwrap()),
			denomination: denomination.map(|v| v.parse::<u8>().unwrap()),
			amount: amount.map(|v| v.parse::<String>().unwrap()),
			exponentiation: exponentiation.map(|v| v.parse::<i8>().unwrap()),
			width: width.map(|v| v.parse::<usize>().unwrap()),
			secrets: secret_parts,
		})
	}
}

#[wasm_bindgen]
#[derive(Debug, Eq, PartialEq, Clone)]
pub struct JsNote {
	#[wasm_bindgen(skip)]
	pub scheme: String,
	#[wasm_bindgen(skip)]
	pub protocol: NoteProtocol,
	#[wasm_bindgen(skip)]
	pub version: NoteVersion,
	#[wasm_bindgen(skip)]
	pub source_chain_id: String,
	#[wasm_bindgen(skip)]
	pub target_chain_id: String,
	#[wasm_bindgen(skip)]
	pub source_identifying_data: String,
	#[wasm_bindgen(skip)]
	pub target_identifying_data: String,

	/// mixer related items
	#[wasm_bindgen(skip)]
	pub secrets: Vec<String>,

	/// Misc - zkp related items
	#[wasm_bindgen(skip)]
	pub curve: Option<Curve>,
	#[wasm_bindgen(skip)]
	pub exponentiation: Option<i8>,
	#[wasm_bindgen(skip)]
	pub width: Option<usize>,

	#[wasm_bindgen(skip)]
	pub token_symbol: Option<String>,
	#[wasm_bindgen(skip)]
	pub amount: Option<String>,
	#[wasm_bindgen(skip)]
	pub denomination: Option<u8>,

	#[wasm_bindgen(skip)]
	pub backend: Option<Backend>,
	#[wasm_bindgen(skip)]
	pub hash_function: Option<HashFunction>,
}

#[wasm_bindgen]
#[derive(Default)]
pub struct JsNoteBuilder {
	#[wasm_bindgen(skip)]
	pub protocol: Option<NoteProtocol>,
	#[wasm_bindgen(skip)]
	pub version: Option<NoteVersion>,
	#[wasm_bindgen(skip)]
	pub source_chain_id: Option<String>,
	#[wasm_bindgen(skip)]
	pub target_chain_id: Option<String>,
	#[wasm_bindgen(skip)]
	pub source_identifying_data: Option<String>,
	#[wasm_bindgen(skip)]
	pub target_identifying_data: Option<String>,

	#[wasm_bindgen(skip)]
	pub amount: Option<String>,
	#[wasm_bindgen(skip)]
	pub denomination: Option<u8>,
	#[wasm_bindgen(skip)]
	pub secrets: Option<Vec<String>>,

	// Misc - zkp related items
	#[wasm_bindgen(skip)]
	pub backend: Option<Backend>,
	#[wasm_bindgen(skip)]
	pub hash_function: Option<HashFunction>,
	#[wasm_bindgen(skip)]
	pub curve: Option<Curve>,
	#[wasm_bindgen(skip)]
	pub token_symbol: Option<String>,
	#[wasm_bindgen(skip)]
	pub exponentiation: Option<i8>,
	#[wasm_bindgen(skip)]
	pub width: Option<usize>,
}

#[allow(clippy::unused_unit)]
#[wasm_bindgen]
impl JsNoteBuilder {
	#[wasm_bindgen(constructor)]
	pub fn new() -> Self {
		Self::default()
	}

	pub fn protocol(&mut self, protocol: Protocol) -> Result<(), JsValue> {
		let protocol: String = JsValue::from(&protocol)
			.as_string()
			.ok_or(OpStatusCode::InvalidNoteProtocol)?;
		let note_protocol: NoteProtocol = protocol
			.as_str()
			.parse()
			.map_err(|_| OpStatusCode::InvalidNoteProtocol)?;
		self.protocol = Some(note_protocol);
		Ok(())
	}

	pub fn version(&mut self, version: Version) -> Result<(), JsValue> {
		let version: String = JsValue::from(&version)
			.as_string()
			.ok_or(OpStatusCode::InvalidNoteVersion)?;
		let note_version: NoteVersion = version
			.as_str()
			.parse()
			.map_err(|_| OpStatusCode::InvalidNoteProtocol)?;
		self.version = Some(note_version);
		Ok(())
	}

	#[wasm_bindgen(js_name = sourceChainId)]
	pub fn source_chain_id(&mut self, source_chain_id: JsString) {
		self.source_chain_id = Some(source_chain_id.into());
	}

	#[wasm_bindgen(js_name = targetChainId)]
	pub fn target_chain_id(&mut self, target_chain_id: JsString) {
		self.target_chain_id = Some(target_chain_id.into());
	}

	#[wasm_bindgen(js_name = sourceIdentifyingData)]
	pub fn source_identifying_data(&mut self, source_identifying_data: JsString) {
		self.source_identifying_data = Some(source_identifying_data.into());
	}

	#[wasm_bindgen(js_name = targetIdentifyingData)]
	pub fn target_identifying_data(&mut self, target_identifying_data: JsString) {
		self.target_identifying_data = Some(target_identifying_data.into());
	}

	pub fn backend(&mut self, backend: BE) {
		let c: String = JsValue::from(&backend).as_string().unwrap();
		let backend: Backend = c.parse().unwrap();
		self.backend = Some(backend);
	}

	#[wasm_bindgen(js_name = hashFunction)]
	pub fn hash_function(&mut self, hash_function: HF) -> Result<(), JsValue> {
		let hash_function: String = JsValue::from(&hash_function)
			.as_string()
			.ok_or(OpStatusCode::InvalidHasFunction)?;
		let hash_function: HashFunction = hash_function.parse().map_err(|_| OpStatusCode::InvalidHasFunction)?;
		self.hash_function = Some(hash_function);
		Ok(())
	}

	pub fn curve(&mut self, curve: WasmCurve) -> Result<(), JsValue> {
		let curve: String = JsValue::from(&curve).as_string().ok_or(OpStatusCode::InvalidCurve)?;
		let curve: Curve = curve.parse().map_err(|_| OpStatusCode::InvalidCurve)?;
		self.curve = Some(curve);
		Ok(())
	}

	#[wasm_bindgen(js_name = tokenSymbol)]
	pub fn token_symbol(&mut self, token_symbol: JsString) {
		self.token_symbol = Some(token_symbol.into());
	}

	pub fn amount(&mut self, amount: JsString) {
		self.amount = Some(amount.into());
	}

	pub fn denomination(&mut self, denomination: JsString) -> Result<(), JsValue> {
		let den: String = denomination.into();
		let denomination = den.parse().map_err(|_| OpStatusCode::InvalidDenomination)?;
		self.denomination = Some(denomination);
		Ok(())
	}

	pub fn exponentiation(&mut self, exponentiation: JsString) -> Result<(), JsValue> {
		let exp: String = exponentiation.into();
		let exponentiation = exp.parse().map_err(|_| OpStatusCode::InvalidExponentiation)?;
		self.exponentiation = Some(exponentiation);
		Ok(())
	}

	pub fn width(&mut self, width: JsString) -> Result<(), JsValue> {
		let width: String = width.into();
		let width = width.parse().map_err(|_| OpStatusCode::InvalidWidth)?;
		self.width = Some(width);
		Ok(())
	}

	#[wasm_bindgen(js_name = setSecrets)]
	pub fn set_secrets(&mut self, secrets: JsString) -> Result<(), JsValue> {
		let secrets_string: String = secrets.into();
		let secrets_parts: Vec<String> = secrets_string.split(":").map(|v| String::from(v)).collect();
		let secs = secrets_parts.iter().map(|v| v.replace("0x", "")).collect();
		self.secrets = Some(secs);
		Ok(())
	}

	pub fn build(self) -> Result<JsNote, JsValue> {
		// Authority
		let version = self.version.ok_or(OpStatusCode::InvalidNoteVersion)?;
		let protocol = self.protocol.ok_or(OpStatusCode::InvalidNoteProtocol)?;

		// Chain Ids
		let source_chain_id = self.source_chain_id.ok_or(OpStatusCode::InvalidSourceChain)?;
		let target_chain_id = self.target_chain_id.ok_or(OpStatusCode::InvalidTargetChain)?;
		let chain_id: u64 = target_chain_id.parse().map_err(|_| OpStatusCode::InvalidTargetChain)?;

		// Chain identifying data
		let source_identifying_data = self
			.source_identifying_data
			.ok_or(OpStatusCode::InvalidSourceIdentifyingData)?;
		let target_identifying_data = self
			.target_identifying_data
			.ok_or(OpStatusCode::InvalidTargetIdentifyingData)?;

		// Misc
		let exponentiation = self.exponentiation;
		let width = self.width;
		let curve = self.curve;

		let secrets = match self.secrets {
			None => match protocol {
				NoteProtocol::Mixer => {
					let secrets = mixer::generate_secrets(
						exponentiation.unwrap_or(5),
						width.unwrap_or(5),
						curve.unwrap_or(Curve::Bn254),
						&mut OsRng,
					)?;

					secrets.iter().map(|s| hex::encode(s)).collect::<Vec<String>>()
				}
				NoteProtocol::Anchor => {
					let secrets = anchor::generate_secrets(
						exponentiation.unwrap_or(5),
						width.unwrap_or(5),
						curve.unwrap_or(Curve::Bn254),
						chain_id,
						&mut OsRng,
					)?;

					secrets.iter().map(|s| hex::encode(s)).collect::<Vec<String>>()
				}
				_ => return Err(JsValue::from(OpStatusCode::SecretGenFailed)),
			},
			Some(secrets) => secrets,
		};

		let backend = self.backend;
		let hash_function = self.hash_function;
		let token_symbol = self.token_symbol;
		let amount = self.amount;
		let denomination = self.denomination;

		let scheme = "webb://".to_string();
		let note = JsNote {
			scheme,
			protocol,
			version,
			source_chain_id,
			target_chain_id,
			source_identifying_data,
			target_identifying_data,
			backend,
			hash_function,
			curve,
			token_symbol,
			amount,
			denomination,
			exponentiation,
			width,
			secrets,
		};
		Ok(note)
	}
}

#[allow(clippy::unused_unit)]
#[wasm_bindgen]
impl JsNote {
	#[wasm_bindgen(constructor)]
	pub fn new(builder: JsNoteBuilder) -> Result<JsNote, JsValue> {
		builder.build()
	}

	#[wasm_bindgen(js_name = deserialize)]
	pub fn js_deserialize(note: JsString) -> Result<JsNote, JsValue> {
		let n: String = note.into();
		let n = JsNote::deserialize(&n)?;
		Ok(n)
	}

	#[wasm_bindgen(js_name = getLeafCommitment)]
	pub fn get_leaf_commitment(&self) -> Result<Uint8Array, JsValue> {
		let leaf_and_nullifier = self.get_leaf_and_nullifier()?;
		Ok(Uint8Array::from(leaf_and_nullifier.leaf_bytes.as_slice()))
	}

	pub fn serialize(&self) -> JsString {
		JsString::from(self.to_string())
	}

	#[wasm_bindgen(getter)]
	pub fn protocol(&self) -> Protocol {
		self.protocol.into()
	}

	#[wasm_bindgen(getter)]
	pub fn version(&self) -> Version {
		self.version.into()
	}

	#[wasm_bindgen(js_name = targetChainId)]
	#[wasm_bindgen(getter)]
	pub fn target_chain_id(&self) -> JsString {
		self.target_chain_id.clone().into()
	}

	#[wasm_bindgen(js_name = sourceChainId)]
	#[wasm_bindgen(getter)]
	pub fn source_chain_id(&self) -> JsString {
		self.source_chain_id.clone().into()
	}

	#[wasm_bindgen(getter)]
	pub fn backend(&self) -> BE {
		self.backend.unwrap_or(Backend::Circom).into()
	}

	#[wasm_bindgen(getter)]
	#[wasm_bindgen(js_name = hashFunction)]
	pub fn hash_function(&self) -> JsString {
		self.hash_function.unwrap_or(HashFunction::Poseidon).into()
	}

	#[wasm_bindgen(getter)]
	pub fn curve(&self) -> WasmCurve {
		self.curve.unwrap_or(Curve::Bn254).into()
	}

	#[wasm_bindgen(getter)]
	pub fn secrets(&self) -> JsString {
		let secrets = self.secrets.join(":");
		secrets.into()
	}

	#[wasm_bindgen(getter)]
	#[wasm_bindgen(js_name = tokenSymbol)]
	pub fn token_symbol(&self) -> JsString {
		self.token_symbol.clone().unwrap_or_default().into()
	}

	#[wasm_bindgen(getter)]
	pub fn amount(&self) -> JsString {
		self.amount.clone().unwrap_or_default().into()
	}

	#[wasm_bindgen(getter)]
	pub fn denomination(&self) -> JsString {
		let denomination = self.denomination.unwrap_or_default().to_string();
		denomination.into()
	}

	#[wasm_bindgen(getter)]
	pub fn width(&self) -> JsString {
		let width = self.width.unwrap_or_default().to_string();
		width.into()
	}

	#[wasm_bindgen(getter)]
	pub fn exponentiation(&self) -> JsString {
		let exp = self.exponentiation.unwrap_or_default().to_string();
		exp.into()
	}
}

#[cfg(test)]
mod test {
	use arkworks_circuits::prelude::ark_bn254;
	use wasm_bindgen_test::*;

	use crate::utils::to_rust_string;

	use super::*;

	type Bn254Fr = ark_bn254::Fr;
	#[test]
	fn deserialize() {
		let note = "webb://v1:anchor/2:3/2:3/376530663462666132363364386239333835343737326339343835316330346233613961626133386162383038613864303831663666356265393735383131306237313437633339356565396266343935373334653437303362316636323230303963383137313235323064653062626435653761313032333763376438323962663662643664303732396363613737386564396236666231373262626231326230313932373235386163613765306136366664353639313534386638373137/?curve=Bn254&width=5&exp=5&hf=Poseidon&backend=Arkworks&token=EDG&denom=18&amount=0";
		let note = JsNote::deserialize(note).unwrap();
		assert_eq!(note.protocol, NoteProtocol::Anchor);
		assert_eq!(note.backend, Some(Backend::Arkworks));
		assert_eq!(note.curve, Some(Curve::Bn254));
		assert_eq!(note.hash_function, Some(HashFunction::Poseidon));
		assert_eq!(note.token_symbol, Some(String::from("EDG")));
		assert_eq!(note.denomination, Some(18));
		assert_eq!(note.version, NoteVersion::V1);
		assert_eq!(note.width, Some(5));
		assert_eq!(note.exponentiation, Some(5));
		assert_eq!(note.target_chain_id, "3".to_string());
		assert_eq!(note.source_chain_id, "2".to_string());
	}

	#[test]
	fn generate_note() {
		let note_str = "webb://v1:anchor/2:3/2:3/376530663462666132363364386239333835343737326339343835316330346233613961626133386162383038613864303831663666356265393735383131306237313437633339356565396266343935373334653437303362316636323230303963383137313235323064653062626435653761313032333763376438323962663662643664303732396363613737386564396236666231373262626231326230313932373235386163613765306136366664353639313534386638373137/?curve=Bn254&width=5&exp=5&hf=Poseidon&backend=Arkworks&token=EDG&denom=18&amount=0";
		let note_value = "7e0f4bfa263d8b93854772c94851c04b3a9aba38ab808a8d081f6f5be9758110b7147c395ee9bf495734e4703b1f622009c81712520de0bbd5e7a10237c7d829bf6bd6d0729cca778ed9b6fb172bbb12b01927258aca7e0a66fd5691548f8717";
		let note = JsNote {
			scheme: "webb://".to_string(),
			protocol: NoteProtocol::Anchor,
			version: NoteVersion::V1,
			source_chain_id: "2".to_string(),
			target_chain_id: "3".to_string(),
			source_identifying_data: "2".to_string(),
			target_identifying_data: "3".to_string(),
			width: Some(5),
			exponentiation: Some(5),
			denomination: Some(18),
			token_symbol: Some("EDG".to_string()),
			hash_function: Some(HashFunction::Poseidon),
			backend: Some(Backend::Arkworks),
			curve: Some(Curve::Bn254),
			amount: Some("0".to_string()),
			secrets: vec![note_value.to_string()],
		};
		assert_eq!(note.to_string(), note_str)
	}
	#[test]
	fn generate_leaf() {}

	#[wasm_bindgen_test]
	fn deserialize_to_js_note() {
		let note_str = "webb://v1:anchor/2:3/2:3/376530663462666132363364386239333835343737326339343835316330346233613961626133386162383038613864303831663666356265393735383131306237313437633339356565396266343935373334653437303362316636323230303963383137313235323064653062626435653761313032333763376438323962663662643664303732396363613737386564396236666231373262626231326230313932373235386163613765306136366664353639313534386638373137/?curve=Bn254&width=5&exp=5&hf=Poseidon&backend=Arkworks&token=EDG&denom=18&amount=0";
		let note = JsNote::js_deserialize(JsString::from(note_str)).unwrap();

		assert_eq!(to_rust_string(note.protocol()), NoteProtocol::Anchor.to_string());
		assert_eq!(to_rust_string(note.version()), NoteVersion::V1.to_string());
		assert_eq!(note.target_chain_id(), JsString::from("3"));
		assert_eq!(note.source_chain_id(), JsString::from("2"));

		assert_eq!(note.width(), JsString::from("5"));
		assert_eq!(note.exponentiation(), JsString::from("5"));
		assert_eq!(note.denomination(), JsString::from("18"));
		assert_eq!(note.token_symbol(), JsString::from("EDG"));

		assert_eq!(to_rust_string(note.backend()), Backend::Arkworks.to_string());
		assert_eq!(to_rust_string(note.curve()), Curve::Bn254.to_string());
		assert_eq!(to_rust_string(note.hash_function()), HashFunction::Poseidon.to_string());
	}

	#[wasm_bindgen_test]
	fn serialize_js_note() {
		let note_str = "webb://v1:anchor/2:3/2:3/376530663462666132363364386239333835343737326339343835316330346233613961626133386162383038613864303831663666356265393735383131306237313437633339356565396266343935373334653437303362316636323230303963383137313235323064653062626435653761313032333763376438323962663662643664303732396363613737386564396236666231373262626231326230313932373235386163613765306136366664353639313534386638373137/?curve=Bn254&width=5&exp=5&hf=Poseidon&backend=Arkworks&token=EDG&denom=18&amount=0";

		let mut note_builder = JsNoteBuilder::new();
		let protocol: Protocol = JsValue::from(NoteProtocol::Anchor.to_string()).into();
		let version: Version = JsValue::from(NoteVersion::V1.to_string()).into();
		let backend: BE = JsValue::from(Backend::Arkworks.to_string()).into();
		let hash_function: HF = JsValue::from(HashFunction::Poseidon.to_string()).into();
		let curve: WasmCurve = JsValue::from(Curve::Bn254.to_string()).into();

		note_builder.protocol(protocol).unwrap();
		note_builder.version(version).unwrap();
		note_builder.target_chain_id(JsString::from("3"));
		note_builder.source_chain_id(JsString::from("2"));
		note_builder.source_identifying_data(JsString::from("2"));
		note_builder.target_identifying_data(JsString::from("3"));

		note_builder.width(JsString::from("5")).unwrap();
		note_builder.exponentiation(JsString::from("5")).unwrap();
		note_builder.denomination(JsString::from("18")).unwrap();
		note_builder.amount(JsString::from("0"));
		note_builder.token_symbol(JsString::from("EDG"));
		note_builder.curve(curve).unwrap();
		note_builder.hash_function(hash_function).unwrap();
		note_builder.backend(backend);
		note_builder.set_secrets(JsString::from("7e0f4bfa263d8b93854772c94851c04b3a9aba38ab808a8d081f6f5be9758110b7147c395ee9bf495734e4703b1f622009c81712520de0bbd5e7a10237c7d829bf6bd6d0729cca778ed9b6fb172bbb12b01927258aca7e0a66fd5691548f8717")).unwrap();
		let note = note_builder.build().unwrap();
		assert_eq!(note.serialize(), JsString::from(note_str));
	}
}

import fs from "node:fs";
import path from "node:path";
import { zodToJsonSchema } from "zod-to-json-schema";
import { buffSchema } from "../types/buff";
import {
	defenceItemSchema,
	shieldItemSchema,
	weaponItemSchema,
} from "../types/item";

// 共通
const outDir = path.join(__dirname, "../../assets/schemas");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function writeSchemaFile(schema: unknown, name: string) {
	const out = {
		$schema: "http://json-schema.org/draft-07/schema#",
		type: "array",
		items: schema,
	};
	fs.writeFileSync(
		path.join(outDir, `${name}.schema.json`),
		JSON.stringify(out, null, 2),
		"utf-8",
	);
}

// JSON Schemaに変換（$refを無効化して展開する）
const shieldItemJsonSchema =
	zodToJsonSchema(shieldItemSchema, {
		name: "ShieldItem",
		$refStrategy: "none",
	}).definitions?.ShieldItem ||
	zodToJsonSchema(shieldItemSchema, {
		name: "ShieldItem",
		$refStrategy: "none",
	});
const weaponItemJsonSchema =
	zodToJsonSchema(weaponItemSchema, {
		name: "WeaponItem",
		$refStrategy: "none",
	}).definitions?.WeaponItem ||
	zodToJsonSchema(weaponItemSchema, {
		name: "WeaponItem",
		$refStrategy: "none",
	});
const defenceItemJsonSchema =
	zodToJsonSchema(defenceItemSchema, {
		name: "DefenceItem",
		$refStrategy: "none",
	}).definitions?.DefenceItem ||
	zodToJsonSchema(defenceItemSchema, {
		name: "DefenceItem",
		$refStrategy: "none",
	});
const buffJsonSchema =
	zodToJsonSchema(buffSchema, {
		name: "Buff",
		$refStrategy: "none",
	}).definitions?.Buff ||
	zodToJsonSchema(buffSchema, { name: "Buff", $refStrategy: "none" });

// 書き出し
writeSchemaFile(shieldItemJsonSchema, "shields");
writeSchemaFile(weaponItemJsonSchema, "weapons");
writeSchemaFile(defenceItemJsonSchema, "defences");
writeSchemaFile(buffJsonSchema, "buffs");

console.log(`JSON Schemas generated in ${outDir}`);

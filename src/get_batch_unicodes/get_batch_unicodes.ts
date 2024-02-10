import { CharModel, unicodes } from "../index";

/**
 * Represents the structure of a Unicode character.
 * @interface UnicodeModel
 */
export interface UnicodeModel {
	/**
	 * The code point of the Unicode character in Hexadecimal.
	 * @type {string}
	 */
	cp: string;
	/**
	 * The name of the Unicode character.
	 * @type {string}
	 */
	name: string;
	/**
	 * The general category of the Unicode character.
	 * @type {string}
	 * @see {@link https://en.wikipedia.org/wiki/Unicode_character_property#General_Category Unicode General Category Charts}
	 */
	gc: string;
	/**
	 * The block to which the Unicode character belongs.
	 * @type {string}
	 * @see {@link https://en.wikipedia.org/wiki/Unicode_block Unicode Block Charts}
	 */
	blk: string;
	/**
	 * Indicates whether the Unicode character is an emoji or not.
	 * @type {boolean}
	 */
	emoji: boolean;
}

/**
 * Retrieves all Unicode characters as a Map.
 * @returns A Map containing all Unicode characters.
 */
export function get_all_unicodes(): Map<string, CharModel> {
	return unicodes;
}

/**
 * Retrieves all Unicode characters as an array of Unicodes objects.
 * @returns An array of Unicodes objects representing all Unicode characters.
 */
export function get_all_unicodes_list(): UnicodeModel[] {
	let allUnicodes: UnicodeModel[] = [];

	for (const [key, value] of unicodes) {
		let tempUnicode: UnicodeModel = {
			cp: key,
			name: value.name,
			gc: value.gc,
			blk: value.blk,
			emoji: value.emoji,
		};
		allUnicodes.push(tempUnicode);
	}

	return allUnicodes;
}

/**
 * Retrieves all emoji characters as a Map.
 * @returns A Map containing all emoji characters.
 */
export function get_all_emojis(): Map<string, CharModel> {
	let allEmojis: Map<string, CharModel> = new Map();

	for (const [key, value] of unicodes) {
		if (value.emoji) {
			allEmojis.set(key, value);
		}
	}

	return allEmojis;
}

/**
 * Retrieves all emoji characters as an array of Unicodes objects.
 * @returns An array of Unicodes objects representing all emoji characters.
 */
export function get_all_emojis_list(): UnicodeModel[] {
	let allEmojis: UnicodeModel[] = [];

	for (const [key, value] of unicodes) {
		if (value.emoji) {
			let tempUnicode: UnicodeModel = {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
			allEmojis.push(tempUnicode);
		}
	}

	return allEmojis;
}

/**
 * Retrieves Unicode characters based on the specified general category.
 * @param general_category - The general category of the Unicode characters.
 * @returns A Map containing the Unicode characters that match the specified general category.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_character_property#General_Category Unicode General Category Charts}
 */
export function get_unicodes_by_gc(
	general_category: string
): Map<string, CharModel> {
	general_category = general_category.toLowerCase();
	let allGcUnicodes: Map<string, CharModel> = new Map();

	for (const [key, value] of unicodes) {
		if (value.gc.toLowerCase() === general_category) {
			allGcUnicodes.set(key, value);
		}
	}

	return allGcUnicodes;
}

/**
 * Retrieves Unicode characters based on the specified general category as an array of Unicodes objects.
 * @param general_category - The general category of the Unicode characters.
 * @returns An array of Unicodes objects representing the Unicode characters that match the specified general category.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_character_property#General_Category Unicode General Category Charts}
 */
export function get_unicodes_list_by_gc(general_category: string): UnicodeModel[] {
	general_category = general_category.toLowerCase();
	let allGcUnicodes: UnicodeModel[] = [];

	for (const [key, value] of unicodes) {
		if (value.gc.toLowerCase() === general_category) {
			let tempUnicode: UnicodeModel = {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
			allGcUnicodes.push(tempUnicode);
		}
	}

	return allGcUnicodes;
}

/**
 * Retrieves Unicode characters based on the specified block.
 * @param block - The block of the Unicode characters.
 * @returns A Map containing the Unicode characters that belong to the specified block.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_block Unicode Block Charts}
 */
export function get_unicodes_by_block(block: string): Map<string, CharModel> {
	block = block.toLowerCase();
	let allBlockUnicodes: Map<string, CharModel> = new Map();

	for (const [key, value] of unicodes) {
		if (value.blk.toLowerCase() === block) {
			allBlockUnicodes.set(key, value);
		}
	}

	return allBlockUnicodes;
}

/**
 * Retrieves Unicode characters based on the specified block as an array of Unicodes objects.
 * @param block - The block of the Unicode characters.
 * @returns An array of Unicodes objects representing the Unicode characters that belong to the specified block.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_block Unicode Block Charts}
 */
export function get_unicodes_list_by_block(block: string): UnicodeModel[] {
	block = block.toLowerCase();
	let allBlockUnicodes: UnicodeModel[] = [];

	for (const [key, value] of unicodes) {
		if (value.blk.toLowerCase() === block) {
			let tempUnicode: UnicodeModel = {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
			allBlockUnicodes.push(tempUnicode);
		}
	}

	return allBlockUnicodes;
}

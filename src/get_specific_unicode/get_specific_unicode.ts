import { CharModel, unicodes } from "../index";
import { UnicodeModel } from "../get_batch_unicodes/get_batch_unicodes";

/**
 * Checks if a Unicode character with the given code point is available.
 * @param code_point - The code point of the Unicode character.
 * @returns A boolean indicating if the Unicode character is available.
 */
export function is_unicode_available(code_point: string): boolean {
	code_point = code_point.toUpperCase();
	if (unicodes.get(code_point)) {
		return true;
	} else {
		return false;
	}
}

/**
 * Retrieves the Unicode character information for the given code point.
 * @param code_point - The code point of the Unicode character.
 * @returns The UnicodeModel object containing the character information, or undefined if the character is not found.
 */
export function get_unicode_by_cp(
	code_point: string
): UnicodeModel | undefined {
	code_point = code_point.toUpperCase();
	let unicode_char: CharModel | undefined = unicodes.get(code_point);
	if (unicode_char) {
		return {
			cp: code_point,
			name: unicode_char.name,
			gc: unicode_char.gc,
			blk: unicode_char.blk,
			emoji: unicode_char.emoji,
		};
	} else {
		return undefined;
	}
}

/**
 * Retrieves the Unicode character information for the given hexadecimal code point.
 * @param code_point - The hexadecimal code point of the Unicode character.
 * @returns The UnicodeModel object containing the character information, or undefined if the character is not found.
 */
export function get_unicode_by_hexadecimal(
	code_point: string
): UnicodeModel | undefined {
	code_point = code_point.toUpperCase();
	return get_unicode_by_cp(code_point);
}

/**
 * Retrieves the Unicode character information for the given decimal code point.
 * @param code_point - The decimal code point of the Unicode character.
 * @returns The UnicodeModel object containing the character information, or undefined if the character is not found.
 */
export function get_unicode_by_decimal(
	code_point: number
): UnicodeModel | undefined {
	return get_unicode_by_cp(code_point.toString(16).padStart(4, "0"));
}

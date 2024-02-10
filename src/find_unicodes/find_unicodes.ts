import { unicodes } from "../index";
import { UnicodeModel } from "../get_batch_unicodes/get_batch_unicodes";

/**
 * Finds a Unicode character by its name.
 * @param name - The name of the Unicode character.
 * @returns The UnicodeModel object representing the found Unicode character, or undefined if not found.
 */
export function find_unicode_by_name(name: string): UnicodeModel | undefined {
	name = name.toLowerCase();
	for (const [key, value] of unicodes) {
		if (value.name.toLowerCase() === name) {
			return {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
		}
	}
	return undefined;
}

/**
 * Finds Unicode characters whose names contain the specified string.
 * @param name - The string to search for in the Unicode character names.
 * @returns An array of UnicodeModel objects representing the found Unicode characters.
 */
export function find_unicode_by_name_contains(name: string): UnicodeModel[] {
	name = name.toLowerCase();
	let unicode_list: UnicodeModel[] = [];
	const nameRegex = new RegExp(name, "i");
	for (const [key, value] of unicodes) {
		if (nameRegex.test(value.name.toLowerCase())) {
			let tempUnicode: UnicodeModel = {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
			unicode_list.push(tempUnicode);
		}
	}
	return unicode_list;
}

/**
 * Calculates the Levenshtein distance between two strings.
 * @param a - The first string.
 * @param b - The second string.
 * @returns The Levenshtein distance between the two strings.
 */
function levenshteinDistance(a: string, b: string): number {
	const lenA = a.length;
	const lenB = b.length;
	const dp: number[][] = [];

	for (let i = 0; i <= lenA; i++) {
		dp[i] = [i];
	}
	for (let j = 1; j <= lenB; j++) {
		dp[0][j] = j;
	}

	for (let i = 1; i <= lenA; i++) {
		for (let j = 1; j <= lenB; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			dp[i][j] = Math.min(
				dp[i - 1][j] + 1,
				dp[i][j - 1] + 1,
				dp[i - 1][j - 1] + cost
			);
		}
	}

	return dp[lenA][lenB];
}

/**
 * Finds the best match Unicode character by its name.
 * @param name - The name of the Unicode character.
 * @returns The UnicodeModel object representing the best match Unicode character, or undefined if not found.
 */
export function find_unicode_by_name_best_match(
	name: string
): UnicodeModel | undefined {
	name = name.toLowerCase();
	let bestMatch: { unicode: UnicodeModel | undefined; distance: number } = {
		unicode: undefined,
		distance: Infinity,
	};

	for (const [key, value] of unicodes) {
		const distance = levenshteinDistance(name, value.name.toLowerCase());
		if (distance < bestMatch.distance) {
			bestMatch = {
				unicode: {
					cp: key,
					name: value.name,
					gc: value.gc,
					blk: value.blk,
					emoji: value.emoji,
				},
				distance,
			};
		}
	}

	return bestMatch.unicode;
}

/**
 * Finds a Unicode character by its symbol.
 * @param symbol - The symbol of the Unicode character.
 * @returns The UnicodeModel object representing the found Unicode character, or undefined if not found.
 */
export function find_unicode_by_symbol(
	symbol: string
): UnicodeModel | undefined {
	let unicodeSymbol: string = symbol
		.codePointAt(0)!
		.toString(16)
		.toUpperCase();
	unicodeSymbol = unicodeSymbol.padStart(4, "0");

	for (const [key, value] of unicodes) {
		if (unicodeSymbol === key) {
			return {
				cp: key,
				name: value.name,
				gc: value.gc,
				blk: value.blk,
				emoji: value.emoji,
			};
		}
	}

	return undefined;
}

/**
 * Gets a random Unicode character.
 * @returns The UnicodeModel object representing the random Unicode character.
 */
export function get_random_unicode(): UnicodeModel {
	const keys = Array.from(unicodes.keys());
	const randomIndex = Math.floor(Math.random() * keys.length);
	const randomKey = keys[randomIndex];
	const randomUnicode = unicodes.get(randomKey);

	if (randomUnicode) {
		return {
			cp: randomKey,
			name: randomUnicode.name,
			gc: randomUnicode.gc,
			blk: randomUnicode.blk,
			emoji: randomUnicode.emoji,
		};
	} else {
		return get_random_unicode();
	}
}

/**
 * Gets a random emoji Unicode character.
 * @returns The UnicodeModel object representing the random emoji Unicode character.
 */
export function get_random_emoji(): UnicodeModel {
	let randomUnicode: UnicodeModel = get_random_unicode();

	if (randomUnicode.emoji) {
		return randomUnicode;
	} else {
		return get_random_emoji();
	}
}

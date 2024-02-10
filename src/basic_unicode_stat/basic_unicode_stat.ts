import { unicodes } from "./../index";

/**
 * Get the total size of the Unicode data.
 * @returns {number} The total size of the Unicode data.
 */
export function get_total_size(): number {
	return unicodes.size;
}

/**
 * Get the size of the emoji characters in the Unicode data.
 * @returns {number} The size of the emoji characters.
 */
export function get_emoji_size(): number {
	let emoji_count = 0;
	for (const value of unicodes.values()) {
		if (value.emoji) {
			emoji_count++;
		}
	}
	return emoji_count;
}

/**
 * Get the size of characters based on the specified general category (gc).
 * @param {string} general_category The general category to filter by.
 * @returns {number} The size of characters belonging to the specified general category.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_character_property#General_Category Unicode General Category Charts}
 */
export function get_size_by_gc(general_category: string): number {
	general_category = general_category.toLowerCase();
	let general_category_count = 0;

	for (const [, value] of unicodes) {
		if (value.gc.toLowerCase() === general_category) {
			general_category_count++;
		}
	}
	return general_category_count;
}

/**
 * Get the size of characters based on the specified Unicode block.
 * @param {string} block The Unicode block to filter by.
 * @returns {number} The size of characters belonging to the specified Unicode block.
 * @see {@link https://en.wikipedia.org/wiki/Unicode_block Unicode Block Charts}
 */
export function get_size_by_block(block: string): number {
	block = block.toLowerCase();
	let block_count = 0;

	for (const [, value] of unicodes) {
		if (value.blk.toLowerCase() === block) {
			block_count++;
		}
	}

	return block_count;
}

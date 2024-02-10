import unicodeFile from "./../data/unicode.json";

/**
 * Represents the structure of a Unicode character.
 * @interface CharModel
 */
export interface CharModel {
	/**
	 * The name of the Unicode character.
	 * @type {string}
	 */
	name: string;
	/**
	 * The general category of the Unicode character.
	 * @type {string}
	 */
	gc: string;
	/**
	 * The block to which the Unicode character belongs.
	 * @type {string}
	 */
	blk: string;
	/**
	 * Indicates whether the Unicode character is an emoji or not.
	 * @type {boolean}
	 */
	emoji: boolean;
}

const unicodeData: { [key: string]: CharModel } = unicodeFile as {
	[key: string]: CharModel;
};

/**
 * Represents a collection of Unicode characters.
 * @type {Map<string, CharModel>}
 */
let unicodes: Map<string, CharModel> = new Map();
Object.keys(unicodeData).forEach((key: string) => {
	unicodes.set(key, unicodeData[key]);
});

export { unicodes };

export * from "./author_info/author_info";
export * from "./basic_unicode_stat/basic_unicode_stat";
export * from "./find_unicodes/find_unicodes";
export * from "./get_batch_unicodes/get_batch_unicodes";
export * from "./get_specific_unicode/get_specific_unicode";

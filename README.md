# Unicode Information

Unicode Information is a versatile npm package that offers a comprehensive set of utilities for working with Unicode characters. It provides functions to retrieve detailed information about Unicode characters, including their names, general categories, blocks, and whether they are emojis. With Unicode Information, you can easily search for Unicode characters by name, code point, or properties, as well as calculate statistics about Unicode data.

## Installation

You can install the package via npm:

```bash
npm install unicode-information
```

## Usage

### Retrieve Unicode Information

```typescript
import {
	get_author_info,
	get_total_size,
	get_emoji_size,
	get_size_by_gc,
	get_size_by_block,
	find_unicode_by_name,
	find_unicode_by_name_contains,
	find_unicode_by_name_best_match,
	find_unicode_by_symbol,
	get_random_unicode,
	get_random_emoji,
	get_all_unicodes,
	get_all_unicodes_list,
	get_all_emojis,
	get_all_emojis_list,
	get_unicodes_by_gc,
	get_unicodes_list_by_gc,
	get_unicodes_by_block,
	get_unicodes_list_by_block,
	is_unicode_available,
	get_unicode_by_cp,
	get_unicode_by_hexadecimal,
	get_unicode_by_decimal,
} from "unicode-information";

console.log("Author Information:", get_author_info());
console.log("Total size of Unicode data:", get_total_size());
console.log("Size of emoji characters:", get_emoji_size());
console.log(
	'Size of characters in the "Lo" general category:',
	get_size_by_gc("Lo")
);
console.log(
	'Size of characters in the "Bengali" block:',
	get_size_by_block("Bengali")
);
console.log(
	'Unicode character with name "snowflake":',
	find_unicode_by_name("snowflake")
);
console.log(
	'Unicode characters containing "heart" in their name:',
	find_unicode_by_name_contains("heart")
);
console.log(
	'Best match Unicode character for "snoflake":',
	find_unicode_by_name_best_match("snoflake")
);
console.log("Unicode character with symbol 🤣:", find_unicode_by_symbol("🤣"));
console.log("Random Unicode character:", get_random_unicode());
console.log("Random emoji Unicode character:", get_random_emoji());
console.log("All Unicode characters as Map:", get_all_unicodes());
console.log("All Unicode characters as a list:", get_all_unicodes_list());
console.log("All emoji characters as Map:", get_all_emojis());
console.log("All emoji characters as a list:", get_all_emojis_list());
console.log(
	'Unicode characters in the "Lo" general category as Map:',
	get_unicodes_by_gc("Lo")
);
console.log(
	'Unicode characters in the "Lo" general category as a list:',
	get_unicodes_list_by_gc("Lo")
);
console.log(
	'Unicode characters in the "Bengali" block as Map:',
	get_unicodes_by_block("Bengali")
);
console.log(
	'Unicode characters in the "Bengali" block as a list:',
	get_unicodes_list_by_block("Bengali")
);
console.log(
	"Is Unicode character U+1F600 available:",
	is_unicode_available("1F600")
);
console.log(
	"Information about Unicode character U+1F600:",
	get_unicode_by_cp("1F600")
);
console.log(
	'Information about Unicode character with hexadecimal code point "1F600":',
	get_unicode_by_hexadecimal("1F600")
);
console.log(
	"Information about Unicode character with decimal code point 128512:",
	get_unicode_by_decimal(128512)
);
```

## Features

- **Retrieve Information:** Retrieve detailed information about Unicode characters, including their names, general categories, blocks, and whether they are emojis.
- **Search Functionality:** Search for Unicode characters by name, code point, or properties.
- **Statistics:** Calculate statistics about Unicode data, such as the total size and size based on general category or block.

## API Documentation

### 1. `get_author_info()`

- **Description:** Retrieves the author information.
- **Usage:** `get_author_info()`
- **Returns:** The author Name and GitHub Profile as a string.

### 2. `get_total_size()`

- **Description:** Retrieves the total size of the Unicode data.
- **Usage:** `get_total_size()`
- **Returns:** The total size of the Unicode data as a number.

### 3. `get_emoji_size()`

- **Description:** Retrieves the size of the emoji characters in the Unicode data.
- **Usage:** `get_emoji_size()`
- **Returns:** The size of the emoji characters as a number.

### 4. `get_size_by_gc(general_category: string)`

- **Description:** Gets the size of characters based on the specified general category.
- **Parameters:**
  - `general_category`: The general category to filter by.
- **Usage:** `get_size_by_gc(general_category)`
- **Returns:** The size of characters belonging to the specified general category.

### 5. `get_size_by_block(block: string)`

- **Description:** Gets the size of characters based on the specified Unicode block.
- **Parameters:**
  - `block`: The Unicode block to filter by.
- **Usage:** `get_size_by_block(block)`
- **Returns:** The size of characters belonging to the specified Unicode block.

### 6. `find_unicode_by_name(name: string)`

- **Description:** Finds a Unicode character by its name.
- **Parameters:**
  - `name`: The name of the Unicode character.
- **Usage:** `find_unicode_by_name(name)`
- **Returns:** The UnicodeModel object representing the found Unicode character, or undefined if not found.

### 7. `find_unicode_by_name_contains(name: string)`

- **Description:** Finds Unicode characters whose names contain the specified string.
- **Parameters:**
  - `name`: The string to search for in the Unicode character names.
- **Usage:** `find_unicode_by_name_contains(name)`
- **Returns:** An array of UnicodeModel objects representing the found Unicode characters.

### 8. `find_unicode_by_name_best_match(name: string)`

- **Description:** Finds the best match Unicode character by its name.
- **Parameters:**
  - `name`: The name of the Unicode character.
- **Usage:** `find_unicode_by_name_best_match(name)`
- **Returns:** The UnicodeModel object representing the best match Unicode character, or undefined if not found.

### 9. `find_unicode_by_symbol(symbol: string)`

- **Description:** Finds a Unicode character by its symbol.
- **Parameters:**
  - `symbol`: The symbol of the Unicode character.
- **Usage:** `find_unicode_by_symbol(symbol)`
- **Returns:** The UnicodeModel object representing the found Unicode character, or undefined if not found.

### 10. `get_random_unicode()`

- **Description:** Gets a random Unicode character.
- **Usage:** `get_random_unicode()`
- **Returns:** The UnicodeModel object representing the random Unicode character.

### 11. `get_random_emoji()`

- **Description:** Gets a random emoji Unicode character.
- **Usage:** `get_random_emoji()`
- **Returns:** The UnicodeModel object representing the random emoji Unicode character.

### 12. `get_all_unicodes()`

- **Description:** Retrieves all Unicode characters as a Map.
- **Usage:** `get_all_unicodes()`
- **Returns:** A Map containing all Unicode characters.

### 13. `get_all_unicodes_list()`

- **Description:** Retrieves all Unicode characters as an array of Unicodes objects.
- **Usage:** `get_all_unicodes_list()`
- **Returns:** An array of Unicodes objects representing all Unicode characters.

### 14. `get_all_emojis()`

- **Description:** Retrieves all emoji characters as a Map.
- **Usage:** `get_all_emojis()`
- **Returns:** A Map containing all emoji characters.

### 15. `get_all_emojis_list()`

- **Description:** Retrieves all emoji characters as an array of Unicodes objects.
- **Usage:** `get_all_emojis_list()`
- **Returns:** An array of Unicodes objects representing all emoji characters.

### 16. `get_unicodes_by_gc(general_category: string)`

- **Description:** Retrieves Unicode characters based on the specified general category.
- **Parameters:**
  - `general_category`: The general category of the Unicode characters.
- **Usage:** `get_unicodes_by_gc(general_category)`
- **Returns:** A Map containing the Unicode characters that match the specified general category.

### 17. `get_unicodes_list_by_gc(general_category: string)`

- **Description:** Retrieves Unicode characters based on the specified general category as an array of Unicodes objects.
- **Parameters:**
  - `general_category`: The general category of the Unicode characters.
- **Usage:** `get_unicodes_list_by_gc(general_category)`
- **Returns:** An array of Unicodes objects representing the Unicode characters that match the specified general category.

### 18. `get_unicodes_by_block(block: string)`

- **Description:** Retrieves Unicode characters based on the specified block.
- **Parameters:**
  - `block`: The block of the Unicode characters.
- **Usage:** `get_unicodes_by_block(block)`
- **Returns:** A Map containing the Unicode characters that belong to the specified block.

### 19. `get_unicodes_list_by_block(block: string)`

- **Description:** Retrieves Unicode characters based on the specified block as an array of Unicodes objects.
- **Parameters:**
  - `block`: The block of the Unicode characters.
- **Usage:** `get_unicodes_list_by_block(block)`
- **Returns:** An array of Unicodes objects representing the Unicode characters that belong to the specified block.

### 20. `is_unicode_available(code_point: string)`

- **Description:** Checks if a Unicode character with the given code point is available.
- **Parameters:**
  - `code_point`: The code point of the Unicode character.
- **Usage:** `is_unicode_available(code_point)`
- **Returns:** A boolean indicating if the Unicode character is available.

### 21. `get_unicode_by_cp(code_point: string)`

- **Description:** Retrieves the Unicode character information for the given code point.
- **Parameters:**
  - `code_point`: The code point of the Unicode character.
- **Usage:** `get_unicode_by_cp(code_point)`
- **Returns:** The UnicodeModel object containing the character information, or undefined if the character is not found.

### 22. `get_unicode_by_hexadecimal(code_point: string)`

- **Description:** Retrieves the Unicode character information for the given hexadecimal code point.
- **Parameters:**
  - `code_point`: The hexadecimal code point of the Unicode character.
- **Usage:** `get_unicode_by_hexadecimal(code_point)`
- **Returns:** The UnicodeModel object containing the character information, or undefined if the character is not found.

### 23. `get_unicode_by_decimal(code_point: number)`

- **Description:** Retrieves the Unicode character information for the given decimal code point.
- **Parameters:**
  - `code_point`: The decimal code point of the Unicode character.
- **Usage:** `get_unicode_by_decimal(code_point)`
- **Returns:** The UnicodeModel object containing the character information, or undefined if the character is not found.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## Author

This package was created by [Shariar Islam Shuvo](https://github.com/ShariarShuvo1).

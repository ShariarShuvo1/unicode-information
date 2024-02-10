import json

with open('./../xml_to_json/ucd.all.flat.json', 'r', encoding='utf-8') as file:
    data = json.load(file)
chars = data["ucd"]["repertoire"]["char"]

output = dict()

for char in chars:
    try:
        if (char["@cp"]):

            isEmoji = False
            if (char["@Emoji"] == "Y"):
                isEmoji = True

            newDict = {
                "name": char["@na"],
                "gc": char["@gc"],
                "blk": char["@blk"],
                "emoji": isEmoji
            }
            output[char["@cp"]] = newDict
    except:
        pass
with open('./../../data/unicode.json', 'w', encoding='utf-8') as file:
    json.dump(output, file, ensure_ascii=False, indent=2)

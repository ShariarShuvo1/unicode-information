import json
import xmltodict

# source: https://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip

with open("ucd.all.flat.xml", encoding='utf-8') as xml_file:
    data_dict = xmltodict.parse(xml_file.read())

    json_data = json.dumps(data_dict, indent=4)

    with open("ucd.all.flat.json", "w") as json_file:
        json_file.write(json_data)

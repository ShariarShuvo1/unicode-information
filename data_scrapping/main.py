import json
import zipfile
import os
from datetime import datetime
try:
    print("Importing requests package...")
    import requests
except ImportError:
    print("Requests package not found. Installing...")
    import subprocess
    import sys

    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests"])
    import requests

print("Requests package imported/installed successfully.")

try:
    print("Importing xmltodict package...")
    import xmltodict
except ImportError:
    print("xmltodict package not found. Installing...")
    import subprocess
    import sys

    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "xmltodict"])
    import xmltodict

print("xmltodict package imported/installed successfully.")


def download_file(url, filename):
    response = requests.get(url, stream=True)
    total_size = int(response.headers.get('content-length', 0))
    block_size = 1024  # 1 KB
    start_time = datetime.now()

    with open(filename, 'wb') as f:
        for data in response.iter_content(block_size):
            f.write(data)
            # Calculate progress
            downloaded_size = f.tell()
            progress = downloaded_size / total_size * 100 if total_size > 0 else 0
            speed = downloaded_size / \
                (datetime.now() - start_time).total_seconds() / 1024  # in KB/s
            # Print progress
            print(f"\r[{datetime.now()}] Downloading {filename}: {downloaded_size}/{total_size} bytes "
                  f"({progress:.2f}%) at {speed:.2f} KB/s", end='', flush=True)
    print()


def unzip_file(zip_file_path):
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extractall('.')
    os.remove(zip_file_path)
    print(f"[{datetime.now()}] Unzipped {zip_file_path} successfully.")


# Download
url = "https://www.unicode.org/Public/UCD/latest/ucdxml/ucd.all.flat.zip"
filename = "ucd.all.flat.zip"
print(f"[{datetime.now()}] Starting download...")
download_file(url, filename)

# Unzip
zip_file_path = "ucd.all.flat.zip"
print(f"[{datetime.now()}] Starting unzip...")
unzip_file(zip_file_path)
print(f"[{datetime.now()}] Finished unzipping...")

# Convert XML to JSON
input_filename = "ucd.all.flat.xml"
output_filename = "ucd.all.flat.json"
print(f"[{datetime.now()}] Converting XML to JSON...")

with open(input_filename, encoding='utf-8') as xml_file:
    data_dict = xmltodict.parse(xml_file.read())

    json_data = json.dumps(data_dict, indent=4)

    with open(output_filename, "w") as json_file:
        json_file.write(json_data)

print(f"[{datetime.now()}] Converted {
      input_filename} to {output_filename} successfully.")

# Read JSON and extract data
with open(output_filename, 'r', encoding='utf-8') as file:
    data = json.load(file)
chars = data["ucd"]["repertoire"]["char"]

print(f"[{datetime.now()}] Making JSON dictonary.")
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
print(f"[{datetime.now()}] JSON dictonary built successfully.")


# Write to file
unicode_filename = "unicode.json"
unicode_directory = f'./../data/'
if not os.path.exists(unicode_directory):
    os.makedirs(unicode_directory)

unicode_file_path = os.path.join(unicode_directory, unicode_filename)
with open(unicode_file_path, 'w', encoding='utf-8') as file:
    json.dump(output, file, ensure_ascii=False, indent=2)

print(f"[{datetime.now()}] Saved unicode data to {unicode_filename}.")

# Delete unnecessary files
try:
    os.remove(input_filename)
    os.remove(output_filename)
    print(f"[{datetime.now()}] Deleted intermediate XML and JSON files.")
except FileNotFoundError:
    print(f"[{datetime.now()}] Intermediate XML and JSON files not found.")

print(f"[{datetime.now()}] Process completed successfully.")

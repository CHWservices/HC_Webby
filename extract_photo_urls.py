import json
import os

def extract_photo_urls(directory):
    photo_urls = []

    # Traverse the directory to find JSON files
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.json'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if 'url' in data:
                        photo_urls.append(data['url'])

    return photo_urls

def main():
    # Directory path to your Google Takeout data
    directory = r'C:\Users\charl\OneDrive\Documents\Coding\undangan\StIvesPhotos'
    photo_urls = extract_photo_urls(directory)

    # Save the URLs to a text file in the desired format
    with open('photo_urls.txt', 'w', encoding='utf-8') as f:
        for url in photo_urls:
            f.write(f"    '{url}',\n")

    print(f'Extracted {len(photo_urls)} photo URLs.')

if __name__ == '__main__':
    main()
import os
from bs4 import BeautifulSoup

# Function to collect text content from the HTML file
def collect_text_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    text_content = {}

    # Collect text from title
    text_content['title'] = soup.title.string if soup.title else ''

    # Collect text from meta tags
    meta_tags = soup.find_all('meta')
    for meta in meta_tags:
        if meta.get('name') in ['author', 'language', 'title', 'description', 'keywords']:
            text_content[meta.get('name')] = meta.get('content')

    # Collect text from body sections
    sections = soup.find_all(['h1', 'h2', 'p', 'a', 'button', 'span', 'label', 'option'])
    for section in sections:
        if section.string:
            text_content[section.string] = section.string

    return text_content

# Function to update the HTML file with new text content
def update_html(file_path, text_content):
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Update title
    if soup.title:
        soup.title.string = text_content.get('title', soup.title.string)

    # Update meta tags
    meta_tags = soup.find_all('meta')
    for meta in meta_tags:
        if meta.get('name') in ['author', 'language', 'title', 'description', 'keywords']:
            meta['content'] = text_content.get(meta.get('name'), meta['content'])

    # Update body sections
    sections = soup.find_all(['h1', 'h2', 'p', 'a', 'button', 'span', 'label', 'option'])
    for section in sections:
        if section.string and section.string in text_content:
            section.string.replace_with(text_content[section.string])

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Main function to collect, edit, and update text content
def main():
    file_path = 'index_Original.html'
    if not os.path.exists(file_path):
        print(f"File {file_path} does not exist.")
        return

    text_content = collect_text_content(file_path)

    print("Current text content:")
    for key, value in text_content.items():
        print(f"{key}: {value}")

    print("\nEnter your changes (leave blank to keep current text):")
    for key in text_content.keys():
        new_value = input(f"{key} ({text_content[key]}): ")
        if new_value:
            text_content[key] = new_value

    update_html(file_path, text_content)
    print("HTML file updated successfully.")

if __name__ == "__main__":
    main()
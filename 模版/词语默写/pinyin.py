from pypinyin import pinyin, Style
import json

def generate_pinyin_dict():
    # Create an empty dictionary to store character-pinyin pairs
    pinyin_dict = {}
    
    # Range of Chinese characters in Unicode
    # Basic Chinese characters are between 0x4E00 and 0x9FFF
    for i in range(0x4E00, 0x9FFF + 1):
        char = chr(i)
        
        # Get only the most common pronunciation (heteronym=False)
        pinyins = pinyin(char, style=Style.TONE, heteronym=False)
        
        # Take just the first pronunciation
        if pinyins and pinyins[0]:
            pronunciation = pinyins[0][0]  # Get the single pronunciation
            pinyin_dict[char] = pronunciation
    
    # Save to JSON file
    with open('_pinyin.json', 'w', encoding='utf-8') as f:
        json.dump(pinyin_dict, f, ensure_ascii=False, indent=4)

    return pinyin_dict

if __name__ == "__main__":
    print("Generating pinyin dictionary...")
    pinyin_dict = generate_pinyin_dict()
    print(f"Generated pinyin for {len(pinyin_dict)} characters")
    

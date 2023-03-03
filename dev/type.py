import json
import urllib.request

def invoke(params):
    requestJson = json.dumps(params).encode('utf-8')
    response = json.load(urllib.request.urlopen(urllib.request.Request('http://localhost:8765', requestJson)))
    return response


def addNote(deck = "敲键背词", model = "敲键背词", fields = None):
    if fields is None:
        return
    params = {
        "action": "addNote",
        "version": 6,
        "params": {
            "note": {
                "deckName": deck,
                "modelName": model,
                "fields": fields,
                "options": {
                    "allowDuplicate": False,
                    "duplicateScope": "deck",
                    "duplicateScopeOptions": {
                        "deckName": deck,
                        "checkChildren": False,
                        "checkAllModels": False
                    }
                },
                "audio": [{
                    "url": f"http://dict.youdao.com/dictvoice?audio={urllib.parse.quote(list(fields.values())[0])}&type=2",
                    "filename": f"{list(fields.values())[0]}.mp3",
                    "fields": ["发音"]
                }]
            }
        }
    }
    response = invoke(params)
    print(f"{list(fields.values())[0]} - {response}")

if __name__ == "__main__":
    fields = {
        "单词": "hello",
        "音标":"",
        "释义": "How are you",
        "例句":"",
        "注释":"",
        "URL":"",
    }
    addNote(fields=fields)
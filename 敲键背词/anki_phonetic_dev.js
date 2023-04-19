
// post version (not working with proxy)
async function getPhoneticSymbols(word) {
  response = await fetch("https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4", {
    method: 'POST',
    headers: {
      'Origin': 'https://dict.youdao.com',
      'Referer': 'https://dict.youdao.com',
      'Content-Type': ' application/x-www-form-urlencoded',
    },
    body: `doctype=json&jsonversion=4&le=en&keyform=webdict&q=${word}`
  });
  data = await response.json()
  phoneticSymbols = {
    "ukphone": data.simple.word[0].ukphone,
    "usphone": data.simple.word[0].usphone
  }

  return phoneticSymbols
}

// get version without proxy - debug only
async function getPhoneticSymbols(word) {
  response = await fetch(`https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4&le=en&keyform=webdict&q=${word}`);
  data = await response.json()
  phoneticSymbols = {
    "ukphone": data.simple.word[0].ukphone,
    "usphone": data.simple.word[0].usphone
  }

  return phoneticSymbols
}

// works with cors proxy
async function getPhoneticSymbols(word) {
  cors_proxy = "http://u.silkdiy.com:3066"
  response = await fetch(`${cors_proxy}/https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4&le=en&keyform=webdict&q=${word}`);
  data = await response.json()
  phoneticSymbols = {
    "ukphone": data.simple.word[0].ukphone,
    "usphone": data.simple.word[0].usphone
  }

  return phoneticSymbols
}

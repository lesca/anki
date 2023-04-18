
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

// v2
function getPhoneticSymbols(word) {
  cors_proxy = "http://u.silkdiy.com:3066"
  fetch(`${cors_proxy}/https://dict.youdao.com/jsonapi_s?q=${word}&le=en&t=2&client=web&sign=30ac8a1fffc5c066d343a8eb2ef8572e&keyfrom=webdict`)
  .then ((response) => {return response.json()})
  .catch(error => console.error('Error:', error))
  .then(response => {
    // get
    phoneticSymbols = {
      "ukphone": response.simple.word[0].ukphone,
      "usphone": response.simple.word[0].usphone
    };
    // console.log(phoneticSymbols)
    // generate html
    phonetic_html = ""
    if (phoneticSymbols.ukphone) {
      phonetic_html += `英 /${phoneticSymbols.ukphone}/` 
    }
    if (phoneticSymbols.usphone) {
      if (phonetic_html) {
        phonetic_html += `<br>美 /${phoneticSymbols.usphone}/` 
      } else {
        phonetic_html += `美 /${phoneticSymbols.usphone}/` 
      }
    }
    // replace
    var phonetic_symobls = document.querySelector("#phonetic_symobls");
    phonetic_symobls.innerHTML = phonetic_html
  });
}


// https://github.com/lesca/anki

// v2
function getPhoneticSymbols(word) {
  cors_proxy = "https://cors.silkdiy.cn"
  fetch(`${cors_proxy}/https://dict.youdao.com/jsonapi_s?q=${word}&le=en&client=web&keyfrom=webdict`)
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

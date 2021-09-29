var inputText = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

var serverAPI = "https://api.funtranslations.com/translate/yoda.json";

btnTranslate.addEventListener('click', translate);

function getTranslation(text){
    return serverAPI + "?" + "text=" + text ;
}

function translate(){

    var textInput = inputText.value;

    fetch(getTranslation(textInput)).then(response => response.json()).then(json => {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
        })
        .catch(errorHandler)
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server, try again after sometime");
}


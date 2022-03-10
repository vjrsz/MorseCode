const MorseInput = document.getElementById("textmorse");
const MorseOutput = document.getElementById("textnormal");
const MorseButton = document.getElementById("btn");
const timeinterval = 500;
const tableMorse = {
    "._":"a",
    "-..":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g", 
    "....":"h", 
    "..":"i", 
    ".---":"j",
    "-.-":"k", 
    ".-..":"l", 
    "--":"m", 
    "-.":"n", 
    "---":"o",
    ".--.":"p", 
    "--.-":"q", 
    ".-.":"r", 
    "...":"s", 
    "-":"t",
    "..-":"u", 
    "...-":"v", 
    ".--":"w", 
    "-..-":"x", 
    "-.--":"y", 
    "--..":"z",
    "-----":"0", 
    ".----":"1", 
    "..---":"2", 
    "...--":"3", 
    "....-":"4", 
    ".....":"5", 
    "-....":"6", 
    "--...":"7", 
    "---..":"8", 
    "----.":"9",
    " ": " ",
}
let state = false;
let textmorse;
let textnormal;

MorseButton.addEventListener("click", () => {
    if(!state){
        initListen()
    }
})
const initListen = () =>{
    console.log("listening...")
    document.getElementsByClassName("input")[0].classList.add('fade')
    state = true
    textmorse = " "
    textnormal = " "
    showtext()
    listen()
}
const finishListen = () => {    
    document.getElementsByClassName("input")[0].classList.remove('fade')
    state = false
    showtext()
    tradutor(textmorse)
}
const listen = () => {
    let caractere;

    MorseButton.onmousedown = () => {
        clearInterval(caractere)
        textmorse += "."
        showtext()
        caractere = setInterval(()=>{
            textmorse = textmorse.slice(0, -1);
            textmorse += "-";
            showtext()
            clearInterval(caractere)
        }, 500);
    }
    MorseButton.onmouseup = () => {
        clearInterval(caractere)
        caractere = setInterval(()=>{
            textmorse += " ";
            showtext()
            if((textmorse.split("  ").length - 1) > 2){
                finishListen()
                clearInterval(caractere)   
            }
        }, 1000);
    }
}
const showtext = () => {
    tradutor(textmorse)
    MorseInput.innerHTML = textmorse;
    MorseOutput.innerHTML = textnormal;
    console.log(textmorse)
}
const tradutor = (text) =>{
    textnormal = "";
    text.split(" ").forEach(txt => {
        if(tableMorse[txt])
            textnormal += tableMorse[txt]
        else if(txt == "")
            textnormal;
        else
            textnormal += '*'
    });
}

const MorseInput = document.getElementById("mrs-input");
const MorseOutput = document.getElementById("mrs-output");
const MorseButton = document.getElementById("mrs-btn");
const timeinterval = 500;
let state = false;
let textmorse;

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
            if((textmorse.split(" ").length - 1) > 2){
                showtext()
                state = false
                clearInterval(caractere)   
            }
        }, 1000);
    }
}
const showtext = () => {
    MorseInput.value = textmorse;
    console.log(textmorse)
}
MorseButton.addEventListener("click", () => {
    if(!state){
        console.log("listening...")
        state = true
        textmorse = "";
        listen()
    }
})

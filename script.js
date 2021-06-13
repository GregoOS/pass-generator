const pwEl =document.getElementById("pw");
const copyEl =document.getElementById("copy");
const upperEl =document.getElementById("upper");
const lowerEl =document.getElementById("lower");
const numberEl =document.getElementById("number");
const symbolEl =document.getElementById("symbol");
const lenghEl =document.getElementById("lengh");
const generateEl =document.getElementById("generate");

const upperLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="012345789";
const symbols="!·$%&/()=?¿'¡ºª\^*[]{}:;,.-_";

function getUpper(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)];
}

function getLower(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

function generatePass(){
    const len = lenghEl.value;
    let pass="";
    if(upperEl.checked||lowerEl.checked||symbolEl.checked||numberEl.checked){
        for(let i =0; i<len;i++){
            let x = generateX();
            pass += x;
        }
    }else{
        pass="Choose some element"
    }

    pwEl.innerText = pass;
}

function generateX(){
    const xs=[];

    if(upperEl.checked){
        xs.push(getUpper());
    }

    if(lowerEl.checked){
        xs.push(getLower());
    }

    if(symbolEl.checked){
        xs.push(getSymbol());
    }

    if(numberEl.checked){
        xs.push(getNumber());
    }

    return xs[Math.floor(Math.random()*xs.length)];
}

copyEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea');
    const pass=pwEl.innerText;

    if(!pass){return;}

    textarea.value=pass;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard")
});

generateEl.addEventListener('click',generatePass);
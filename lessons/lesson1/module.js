import "regenerator-runtime/runtime";

let trimSpaces = (str) =>{
    return str.replace(/ {2,}/g,' ');
}

let wordsCount = str => trimSpaces(str).trim().split(' ').length;

function* getWords(str){
    let arrayWords = trimSpaces(str).trim().split(' ');
    for (let index = 0; index < arrayWords.length; index++) {
         yield arrayWords[index];
        
    }
}


export { wordsCount,  getWords};
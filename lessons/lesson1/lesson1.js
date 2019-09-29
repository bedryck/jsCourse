import { wordsCount, getWords } from './module'

const lessons1 = () => {
    let testString = '  Всем  привет! Ура ура! ';
    console.log(wordsCount(testString));

    for(let some of getWords(testString)){
        console.log(some);			
    }

}
export default lessons1; 
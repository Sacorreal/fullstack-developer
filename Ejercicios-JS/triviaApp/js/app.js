const API_TRIVIA = `https://opentdb.com/api.php?amount=10`

const generateTrivia = async() =>{
    const response = await fetch(API_TRIVIA); 
    const data = await response.json(); 
    const arrayTrivia = data.results;  
    const category = arrayTrivia.map(trivia =>trivia)
    console.log(category)}

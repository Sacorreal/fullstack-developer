import {triviaBoolean} from "../js/triviaBoolean"; 
const generateTrivia = document.getElementById("generate-trivia");


//obtener valores del formulario
generateTrivia.addEventListener("click", (e) => {
  const difficulty = document.getElementById("difficulty").value;
  const typeResponse = document.getElementById("type-response").value;
  const category = document.getElementById("list-categories").value;
  
  getTrivia(difficulty, typeResponse, category);
  e.preventDefault();    
  if(typeResponse == "multiple"){
    triviaBoolean
  }
  else{
    triviaMultiple
  }  

});

// pedir datos dinámicos desde API 
const getTrivia = async(difficulty, typeResponse, category) =>{
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${typeResponse}`); 
    const data = await response.json(); 
    const arrayTrivia = data.results;  
    console.log(data)  
}; 



const triviaMultiple = () =>{


}

    



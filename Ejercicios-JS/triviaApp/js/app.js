const generateTrivia = document.getElementById("generate-trivia");


//obtener valores del formulario
generateTrivia.addEventListener("click", (e) => {
  const difficulty = document.getElementById("difficulty").value;
  const typeResponse = document.getElementById("type-response").value;
  const category = document.getElementById("list-categories").value;
  
  getTrivia(difficulty, typeResponse, category);
  e.preventDefault();    
  
});






    



// pedir datos dinámicos desde API 
const getTrivia = async(difficulty, typeResponse, category) =>{
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${typeResponse}`); 
    const data = await response.json(); 
    const arrayTrivia = data.results;      
    if(typeResponse == "multiple"){
        alert("Escogiste multiple")
    }else{
        triviaBoolean(arrayTrivia)
    }   
}; 






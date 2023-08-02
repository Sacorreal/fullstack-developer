const formTrivia = document.getElementById("trivia-generate"); 
const btnSendTrivia = document.getElementById("btn-send-trivia");


// pedir datos dinámicos desde API 
const getTrivia = async(difficulty, typeResponse, category) =>{
    const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${typeResponse}`); 
    const data = await response.json(); 
    const arrayTrivia = data.results; 

    if(typeResponse == "multiple")
    {
     //funcion para multiple        
    }
    // si es booleano haz esto => 
    else{
        for (let i = 0; i < arrayTrivia.length; i++) {
            const triviaList = document.createElement("div");        
            //triviaList.setAttribute("class","form")
            triviaList.innerHTML = `<label for="" class="form-label">${arrayTrivia[i].question}</label>
            <select class="form-select" id= ${i}>
                <option value="any"></option>                                
                <option value="True">True</option>
                <option value="False">False</option>                
              </select>` 
              formTrivia.appendChild(triviaList)              
        }   
        btnSendTrivia.setAttribute("class", "btn btn-success btn-lg my-4");
        console.log(arrayTrivia)

        formTrivia.addEventListener("submit", e =>{
            e.preventDefault();
            const responseTrivia = []; 
            for (let i = 0; i < 10; i++) {
                const responseUser = document.getElementById(i).value;
                responseTrivia.push(responseUser)
            }    
            // fuera 
            let scoreUser = 0; 
            for (let i = 0; i < 10; i++) {
                if (arrayTrivia[i].correct_answer == responseTrivia[i] ) {  
                    scoreUser+=100  

                }                
                
            }
            alert(`Tu puntaje es ${scoreUser}`)
            window.location.reload(); 
            
        
        })
        
    }   
}; 






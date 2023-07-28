const formTrivia = document.getElementById("trivia-generate"); 
const btnSendTrivia = document.getElementById("btn-send-trivia");

// trivia para booleanos
const triviaBoolean = (arrayTrivia) =>{
    
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
}

//leer resultado de la trivia 
formTrivia.addEventListener("submit", e =>{
    e.preventDefault();
    const responseTrivia = []; 
    for (let i = 0; i < 10; i++) {
        const responseUser = document.getElementById(i).value;
        responseTrivia.push(responseUser)
    }    
    console.log(responseTrivia)
})

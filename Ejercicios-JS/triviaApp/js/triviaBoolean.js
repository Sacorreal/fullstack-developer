const triviaContainer = document.getElementById("trivia-container"); 
const btnSendTrivia = document.getElementById("btn-send-trivia");

const triviaBoolean = (arrayTrivia) =>{
    
    for (let i = 0; i < arrayTrivia.length; i++) {
        const formTrivia = document.createElement("div");        
        formTrivia.setAttribute("class","form")
        formTrivia.innerHTML = `<label for="" class="form-label">${arrayTrivia[i].question}</label>
        <select class="form-select" id="type-response">
            <option value="any"></option>                                
            <option value="True">True</option>
            <option value="False">False</option>                
          </select> ` 
        triviaContainer.appendChild(formTrivia)              
    }     

    btnSendTrivia.setAttribute("class", "btn btn-success btn-lg my-4"); 
}
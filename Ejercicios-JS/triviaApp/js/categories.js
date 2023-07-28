const API_CATEGORIES = `https://opentdb.com/api_category.php`; 
const optionsCategories = document.getElementById("list-categories");


const listCategories = async() => {    
    const response = await fetch(API_CATEGORIES); 
    const data = await response.json(); 
    const triviaCategories = data.trivia_categories; 

    for (let i = 0; i < triviaCategories.length; i++) {
        const optionCategories =document.createElement("option");
        optionCategories.value = `${triviaCategories[i].id}`;
        optionCategories.innerHTML = `${triviaCategories[i].name}`;       
        optionsCategories.appendChild(optionCategories)
    }  
        
}

listCategories();
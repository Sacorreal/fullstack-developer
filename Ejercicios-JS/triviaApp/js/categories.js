const selectCategory = `https://opentdb.com/api_category.php`; 


const listCategories = async() => {
    //const optionsCategories = document.getElementById("list-categories");
    const response = await fetch(selectCategory); 
    const data = await response.json(); 
    const triviaCategories = data.trivia_categories;     
    for (let i = 0; i < triviaCategories.length; i++) {      
        
        categoriesOption.innerHTML = `<option value="${triviaCategories[i].id}">${triviaCategories[i].name}`;
        optionsCategories.appendChild(categoriesOption)

    }  
    console.log(triviaCategories[9].name)    
}

listCategories();
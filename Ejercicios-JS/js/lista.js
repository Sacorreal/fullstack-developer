const button = document.getElementById("añadir"); 
const list = document.getElementById("miLista"); 


//agregar un elemento li al HTML  
button.addEventListener("click",function(){
    list.innerHTML += `<li>Elemento ${list.children.length+1}</li>`
     


})

// Cambiar estilo al elemento 

list.addEventListener("click",function(event){
    const selectedLi = event.target;
    if (selectedLi.tagName.toLowerCase() === "li") {
        selectedLi.style.color = "red"
      }
})

//borrar elemento
list.addEventListener("dblclick",function(event){
    const selectedLi = event.target;
    if (selectedLi.tagName.toLowerCase() === "li") {
        list.removeChild(selectedLi);
      }
})
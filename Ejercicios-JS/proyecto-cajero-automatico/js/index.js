const showCredentials = document.getElementById("show-credentials1");
const showPassword1 = document.querySelector("#password1");
const showbalance1 = document.querySelector("#balance1");
const hideCredentials = document.getElementById("hide-credentials1");

// ocultar credenciales usuario 1
hideCredentials.addEventListener("click", function () {
  showPassword1.textContent = "****";
  showbalance1.textContent = "****";
});

//mostrar credenciales usuario 1
showCredentials.addEventListener("click", function () {
  showPassword1.textContent = "1234";
  showbalance1.textContent = "$500";
});

//Definir las constantes para los datos de los usuarios

const user1 = {name: "MARK", password: 1234}; 

const user2 = {name: "Jacob", password: 4578}

const user3 = {name: "Peter", password: 8785}

// Cual es la mejor opción? 

/* const users = {
    user1 : {
        name: "Mark",
        password: 1234
    },
    user2 : {
        name: "Jacob",
        password: 7896
    }
}

*/

//datos ingresados por el usuarios


const btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener("click", function(){
    const inputName = document.getElementById("name"); 
    const userName = inputName.value.toUpperCase();

    const inputPassword = document.getElementById("password"); 
    const userPassword = Number(inputPassword.value); 
    
    if (userName == user1.name && userPassword == user1.password ){        
        alert ("haz ingresado los datos correctos reenviar a pagina registro")
    }else{
        alert("datos incorrectos")
    }

    
})



// validar los datos para acceder al login




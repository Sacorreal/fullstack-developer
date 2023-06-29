//html user1 
const showCredentials = document.getElementById("show-credentials1");
const showPassword1 = document.querySelector("#password1");
const showbalance1 = document.querySelector("#balance1");
const hideCredentials = document.getElementById("hide-credentials1");

//html user 2
const showCredentials2 = document.getElementById("show-credentials2");
const showPassword2 = document.querySelector("#password2");
const showbalance2 = document.querySelector("#balance2");
const hideCredentials2 = document.getElementById("hide-credentials2");

//html user3
const showCredentials3 = document.getElementById("show-credentials3");
const showPassword3 = document.querySelector("#password3");
const showbalance3 = document.querySelector("#balance3");
const hideCredentials3 = document.getElementById("hide-credentials3");


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

// ocultar credenciales usuario 2
hideCredentials2.addEventListener("click", function () {
  showPassword2.textContent = "****";
  showbalance2.textContent = "****";
});
//mostrar credenciales usuario 2
showCredentials2.addEventListener("click", function () {
  showPassword2.textContent = "4578";
  showbalance2.textContent = "$100";
});

// ocultar credenciales usuario 3
hideCredentials3.addEventListener("click", function () {
  showPassword3.textContent = "****";
  showbalance3.textContent = "****";
});
//mostrar credenciales usuario 3
showCredentials3.addEventListener("click", function () {
  showPassword3.textContent = "8785";
  showbalance3.textContent = "$350";
});



//Definir las constantes para los datos de los usuarios

const user1 = { name: "MARK", password: 1234 };

const user2 = { name: "JACOB", password: 4578 };

const user3 = { name: "PETER", password: 8785 };



//datos ingresados por el usuarios
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {
  const inputName = document.getElementById("name");
  const userName = inputName.value.toUpperCase();

<<<<<<< HEAD
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
=======
  const inputPassword = document.getElementById("password");
  const userPassword = Number(inputPassword.value);
>>>>>>> b8fff4b1c1eb81532626b5ebf3668e39ede162d1

  function user1Validator() {
    alert(`Bienvenido a tu banco ${user1.name}!`);
    location.href = "./registroMark.html";
  }

  function user2Validator() {
    alert(`Bienvenido a tu banco ${user2.name}!`);
    location.href = "./registroJacob.html";
  }
  function user3Validator() {
    alert(`Bienvenido a tu banco ${user3.name}!`);
    location.href = "./registroPeter.html";
  }

  if (userName == user1.name && userPassword == user1.password) {
    user1Validator();
  } else if (userName == user2.name && userPassword == user2.password) {
    user2Validator();
  } else if (userName == user3.name && userPassword == user3.password) {
    user3Validator();
  } else {
    alert("Datos incorrectos! ");
  }
});

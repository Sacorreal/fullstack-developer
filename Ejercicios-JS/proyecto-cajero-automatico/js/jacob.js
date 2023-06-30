//depositar desde html
const userDeposit = document.getElementById("user-deposit"); 
const deposit = document.getElementById("deposit"); 

//retirar desde html
const retiro = document.getElementById("retiro")
const retirar = document.getElementById("retirar")

//saldo actual html
const currentBalance = document.getElementById("current-balance")
let cbActually = Number(currentBalance.textContent)

const limitBalance = 990
const initialBalance = 100; 
let totalBalance = initialBalance;

function depositarSaldo(){
    const valueUser = Number(userDeposit.value);
    // validación => 
    totalBalance += valueUser       
    currentBalance.textContent = totalBalance    
}

//depositar
deposit.addEventListener("click", function(){
    depositarSaldo()    
})

retirar.addEventListener("click", function(){
    const currentBalance = document.getElementById("current-balance")
    let cbActually = Number(currentBalance.textContent)
    const valorRetiro = Number(retiro.value)
     // validaciones
    cbActually-= valorRetiro
    currentBalance.textContent = cbActually
        
})












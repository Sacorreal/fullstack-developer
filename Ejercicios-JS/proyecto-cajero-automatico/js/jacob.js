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
    
    totalBalance += valueUser    
    if(totalBalance <= limitBalance){
        currentBalance.textContent = totalBalance  
    }   
      else{
        alert("Te pasaste del monto máx permitido")
      }
}

//depositar
deposit.addEventListener("click", function(){
    depositarSaldo()    
})

retirar.addEventListener("click", function(){
    const currentBalance = document.getElementById("current-balance")
    let cbActually = Number(currentBalance.textContent)
    const valorRetiro = Number(retiro.value)
    console.log(cbActually)
    if(cbActually > 10){
    cbActually-= valorRetiro
    currentBalance.textContent = cbActually
    }
    else {
        alert("no puedes sacar más de lo permitido")
    }    
        
})












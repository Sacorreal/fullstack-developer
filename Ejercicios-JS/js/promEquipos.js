const Patriots = [18,13,14];
const Broncos = [18, 13, 14]; 

//calculo del promedio
const promPatriots = Math.round(Patriots.reduce(function(a,b){return (a + b)  } ) /3) ;
const promBroncos = Math.round(Broncos.reduce(function(a,b){return (a + b)  } ) / 3) ;

if (promPatriots > promBroncos && promPatriots >20 || promBroncos>20 ) {
    console.log(`Gana Patriots con ${promPatriots} puntos!`)
    
    
} else if (promPatriots < promBroncos && promPatriots >20 || promBroncos>20) {
    console.log(`Gana Broncos con ${promBroncos} puntos!`)
    

} else if (promPatriots == promBroncos ){
    console.log(`Hay un empate de ${promPatriots} puntos, ambos equipos ganan!`)

}else{
    console.log("No cumplen con la regla de 20 puntos")
}


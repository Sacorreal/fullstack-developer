import axios from "axios"; 

async function getType(){
    const response = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
    }); 
    const type = response.data
    //type es mi array 
    
    for (let i = 0; i < type.length; i++) {
        const pokemon = type[i].name;    
        console.log(pokemon)    
    }
    
}

getType()


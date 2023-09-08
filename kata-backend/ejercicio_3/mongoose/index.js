import express  from "express";

import cors from "cors"
import { User } from "./schemas/user.schema.js";

import { dbConnection } from "./database/db.js";

const server = express(); 
const PORT = 3001

server.use(express.json());
server.use(cors());

// rutas del api 
server.use("/api/v1/users", UserRouter)

async function main(){
    try {
        await dbConnection(); 
        server.listen(PORT, ()=> {console.log(`Server up http://localhost:${PORT}  🚀`)})
        
    } catch (error) {
        console.log(error.message)
    }
}

//esquemas de bases de datos 
server.use(User)




main(); 

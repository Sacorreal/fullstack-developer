import express  from "express";
import mongoose from "mongoose";
import cors from "cors"
import { User } from "./schemas/user.schema.js";
//import { } from "./routes/user.router.js";

const server = express(); 
const PORT = 3001

server.use(express.json());
server.use(cors());

// rutas del api 
server.use("/api/v1", UserRouter)

async function main(){
    try {
        await mongoose.connect('mongodb+srv://administrador:admin123@mongodb101.is4h16h.mongodb.net/social?retryWrites=true&w=majority')
        server.listen(PORT, ()=> {console.log(`Server up http://localhost:${PORT}  🚀`)})
        
    } catch (error) {
        console.log(error.message)
    }
}

//esquemas de bases de datos 
server.use(User)




main(); 

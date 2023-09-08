import { Router } from 'express'; 
import { User } from '../schemas/user.schema.js';
export const userRouter = Router(); 

 userRouter.get("/", async (req, res)=>{
   const users = await User.find(); 
   res.status(200).json(users)
})

userRouter.post("/", async(req, res)=>{
    
})
 



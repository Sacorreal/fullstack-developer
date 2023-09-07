import { Router } from 'express'; 
import { User } from '../schemas/user.schema.js';
const router = Router(); 

 router.get("/users", async (req, res)=>{
   const users = await User.find(); 
   res.status(200).json(users)
})

export default router; 



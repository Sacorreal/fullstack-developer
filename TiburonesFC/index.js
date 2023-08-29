const router = require('./router/router.js'); 
const express = require('express'); 
require('dotenv').config(); 
const PORT = process.env.APP_PORT
const app = express(); 
    
app.use(router); 

app.listen(PORT)
console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`)
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 

//middlewares
app.use(express.json()); 
app.use(express.urlencoded({extended : false})); // Procesa el dato y lo pasa a objeto 
app.use(cors()); 

// Importar router 
app.use(require('./routers/index')); 


app.listen(4000);  
console.log('Server on port 4000')
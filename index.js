const express = require('express');
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

//http://localhost:3000/
app.get('/',
    (req
     , res) =>
    {res.send('Hello World!');
    })

//http://localhost:3000/
app.post('/',
    (req
     ,res) =>{
    res.send('Hello World!');
    })

//Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
})


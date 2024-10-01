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
app.get('/user',
    (req
        ,res) =>{
        const firstname = req.query.firstname || 'Pritesh';
        const lastname = req.query.lastname || 'Patel';
        res.json({firstname, lastname});
    })

//http://localhost:3000/
app.get('/hello',
    (req
     ,res) =>{
    res.send('Hello Express JS');
    })

//http://localhost:3000/
app.post('/user/:firstname/:lastname',
    (req
        ,res) =>{
        const { firstname, lastname } = req.params;
        res.json({firstname, lastname});
    })

//Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
})


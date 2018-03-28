const express = require('express')
    , cors = require('cors')
    , bodyParser = require('body-parser')
    , dotenv = require('dotenv').config()
    , app = new express()
    , path = require('path')

app.use(bodyParser.json())
app.use(cors())
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'));
});
// app.use(express.static(__dirname + '../index.html'))

app.listen(3000, _ => {
    console.log(`All I want is our souls to touch, maybe I'll know you then 3000`)
})
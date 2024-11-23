require('dotenv').config()
// we fetch port and another details from .env file 
// and now we can change port to process.env.PORT


// import express from "express"
//  line 1 aur 2 both are doing same thing 
// but line 2 is use mostly
const express = require('express')
const app = express()
//by express , we can create a variable app. 
//  now app is a powerfull variable in itself

const port = 4000
// by this port 

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// '/' means home route pe   
// req means request 
// res means response

app.get('/leetcode', (req, res) => {
    res.send('<h1>deepakyadav21 solve 300+ problems</h1>')
})

app.get('/instagram', (req, res) => {
    res.send('<h2>its_yadu__ 45 post on this account</h2>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
const express = require("express")
const path = require('path')
const fs = require('fs')

const app = express()

app.get("/", (request, response) => {
    response.send({message: "hello to the other siiiiidie"})
})

app.get("/another", (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html')) //noice
})

app.get("/information", function (request, response){
    response.sendFile(path.join(__dirname + '/information.html'))
})

app.get('/first_server/scripts.js', (request, response) => {
    response.sendFile(path.join(__dirname + '/scripts.js'))
})

app.post('/ajax', (request, response) => {
    let text = fs.readFileSync('./info.txt')
    let textString = String.fromCharCode(...text)

    response.send(textString)
})

app.listen(8080)
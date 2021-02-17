const express = require("express")
const path = require('path')
const fs = require('fs')
const body = require('body-parser')

const app = express()
app.use(body.json())

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

app.get('/ajax/get', (request, response) => {
    let text = fs.readFileSync('./info.txt')
    let textString = String.fromCharCode(...text)

    response.send(textString)
})

app.post('/ajax/post', (request, response) =>{
    console.log("we are liiive")
    console.log(request.body)
    fs.writeFile('./info.txt', ' ' + request.body['post-text'],{ flag: 'a'}, error => {
        console.log("error at writing to file")
        console.log(error)
    })
    response.send("big data")
})

app.listen(8080)
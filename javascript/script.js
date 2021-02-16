const messageForm = document.getElementById("send-container")
console.log(messageForm)

messageForm.addEventListener('submit',function (event){
    event.preventDefault()

    let input = document.getElementById('message-input').value
    console.log(input)
    document.getElementById('message-input').value = ''
    document.getElementById('receive-container').append(input)

})
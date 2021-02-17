

const updateDiv = () => {
    console.log("hello123")
}

function ajaxAttempt(){
    $.ajax({
        url: '/ajax/get',
        type: 'GET',
        success: function (data){
            //document.getElementById('file-info').innerText += data //using some standard something
            $('#file-info').append(data) //using jquery
        }
    })
}

$('#post-test').submit(function (event){
    event.preventDefault()
    let jsonObject = {}
    jsonObject["post-text"] = $('#post-text').val()
    console.log(jsonObject)
    $.ajax({
        url: '/ajax/post',
        type: 'POST',
        contentType: 'application/JSON',
        data: JSON.stringify(jsonObject),
        success: function (data){
            console.log("virker")
            console.log(data)
        }
    })
})



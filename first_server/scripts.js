

const updateDiv = () => {
    console.log("hello123")
}

function ajaxAttempt(){
    $.ajax({
        url: '/ajax',
        type: 'POST',
        data: 'vigtig data',
        success: function (data){
            //document.getElementById('file-info').innerText += data //using some standard something
            $('#file-info').append(data) //using jquery
        }
    })
}


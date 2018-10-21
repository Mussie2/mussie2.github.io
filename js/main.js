var text = document.getElementById('input')
var send = document.getElementById('send')
var message = document.getElementById('text-box')
var userId = document.getElementById('userId')
var submit = document.getElementById('submit')


submit.addEventListener('click',function(){
    var msBox = document.querySelector('div')
    msBox.style.display = 'block';
    userId.style.display = 'none';
    submit.style.display ='none';
    var usersId = document.querySelector('#userName')
    usersId.innerHTML = userId.value;
    usersId.style.color = 'grey';
})


function keyCode(event){
    var x = event.keyCode;
    if (x == 13) {
        var textMesg = document.createElement('li')
        textMesg.innerHTML = text.value;
        textMesg.style.listStyle = 'none';
        textMesg.style.marginRight = '5px';
        message.appendChild(textMesg);
        text.value = '';
    }
}

send.addEventListener('click', function(){
    var textMesg = document.createElement('li')
    textMesg.innerHTML = text.value;
    textMesg.style.listStyle = 'none';
    textMesg.style.fontWeight = 'bold';
    textMesg.style.margin = '5px';
    //msBox.appendChild(textMesg);
    message.appendChild(textMesg);
    text.value = '';
});
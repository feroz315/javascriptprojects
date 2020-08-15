const form = document.getElementById('form');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');


// fucntion for showerror
function ShowError(input,message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// function for showsuccess
function ShowSuccess(input){

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// function for email
    function Emailvaldiate(Email){
        const remail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return remail.test(String(email).toLowerCase());

    }
// this is add event listerns

form.addEventListener('submit',function (e)  {
e.preventDefault();

if( username.value === '' ){
    ShowError(username,'username is required');
}else{
    ShowSuccess(username);
}

if( Email.value === '' ){
    ShowError(Email,'Email is required');
}else if(!Emailvaldiate(Email.value)){
    ShowError(Email,'Email is invaild');
}else{
    ShowSuccess(Email);
}
if( Password.value === '' ){
    ShowError(Password,'Password is required');
}else{
    ShowSuccess(Password);
}

if( Password2.value === '' ){
    ShowError(Password2,' Confirm Password is required');
}else{
    ShowSuccess(Password2);
}

})
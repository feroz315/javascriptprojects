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
// this is add event listerns

form.addEventListener('submit',function (e)  {
e.preventDefault();

if( username.value === '' ){
    ShowError(username,'username is required');

}else{
    ShowSuccess(username);
}

if( Email.value === '' ){
    ShowError(Email,'email is required');

}else{
    ShowSuccess(Email);
}

if( password.value === '' ){
    ShowError(Password,'Password is required');

}else{
    ShowSuccess(Password);
}

if( password2.value === '' ){
    ShowError(Password2,' Password2 is required');

}else{
    ShowSuccess(Password2);
}

})
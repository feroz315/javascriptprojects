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

// function for All
    function checkrequired(inputArray){
    inputArray.forEach(function(input) {
        if (input.value === ''){
            ShowError(input,`${input.id} is required `);
        }else
        {
              ShowSuccess(input);  
        }
        
    });    

    }
//function for filed
    function getFieldid(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice();
    } 

// this is add event listerns
form.addEventListener('submit',function (e)  {
e.preventDefault();

    checkrequired([username,Email,Password,Password2]);
}
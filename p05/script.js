const main = document.getElementById('main');
const adduserbtn = document.getElementById('add-user');
const doublemoneybtn = document.getElementById('double');
const showmillionsbtn = document.getElementById('show-millionaires');
const sortbtn = document.getElementById('sort');
const calculatebtn = document.getElementById('Calculate-total');


//initialzing Data Array
let data =[];

//Create Initial Users
generateRandomUser();
generateRandomUser();
generateRandomUser();

//Function to fetch random user from Api
//Api: randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    
    const user = data.results[0];
    const newUser ={
        name: `${user.name.first} ${user.name.last}`,
        worth: Math.round(Math.random()*100000)
    }
        AddData(newUser);
}

//function double money
function doubleworth(){
    data = data.map( item => {
        return{ ...item, worth: item.worth * 2 }
    });
   updateDOM();

}

//functon sort
function sortrichest(){
    data.sort((a, b) => b.worth - a.worth);
  updateDOM();
} 

//function filter 
function showMillionaires(){
    data = data.filter(
        item => item.worth > 1000000
    );
    updateDOM();
}

//function calculate total worth
function totalcalculate(){
    const totalworth = data.reduce(
    (acc, item) => (acc += item.worth),0
    );

        const totalNetWorthElement = document.createElement('div')
        totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(totalworth)}</strong></h3>`;
        main.appendChild(totalNetWorthElement); 
}
//Add Newly Generated
function AddData(newUser){
    data.push(newUser);
     
    updateDOM();
}

//function 
function updateDOM(inputData = data){
    main.innerHTML = '<h2><strong>Name</strong> Net Worth</h2>';
    inputData.forEach( item => {
    const element = document.createElement('div');
    element.classList.add('name');
    element.innerHTML =`<strong>${item.name}</strong> ${formatCurrency(item.worth)}`; 
    main.appendChild(element);   
    });    
  
}
//Function to format a number as a currency
function formatCurrency(num){
    return 'PKR' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  

}
//Add User eventlistener
adduserbtn.addEventListener('click', generateRandomUser);
//Double Money event listener
doublemoneybtn.addEventListener('click', doubleworth);
//sort event listener
sortbtn.addEventListener('click', sortrichest);
//filter event listener
showmillionsbtn.addEventListener('click',showMillionaires);
//total calculate 
calculatebtn.addEventListener('click',totalcalculate);




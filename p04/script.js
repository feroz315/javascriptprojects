const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const amountone = document.getElementById('amount-one');
const amounttwo = document.getElementById('amount-two');
const flipbutton = document.getElementById('flip');
const rate = document.getElementById('rate');

//Fetch exchange rate  3rd party N DOM update
//www.exchangerate-api.com 

function calculate() {
   
    const currone = currOnePicker.value;
    const currtwo = currTwoPicker.value;
     
    fetch(`https://v6.exchangerate-api.com/v6/e5fb6e78d4418611a6b4f55b/latest/${currone}`)
        .then( res => res.json() )
        .then( data => {
            
              const exchangeRate = data.conversion_rates[currtwo];
            //Display conversion rate
           rate.innerHTML = `1 ${currone} = ${exchangeRate} ${currtwo}`;
    });
        
//Apply conversion rate two
           amounttwo.value = (amountone.value * exchangeRate).tofixed(2);
}

//flip button click
function flip()  {
    
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();

}
//addeventlistener

currOnePicker.addEventListener('change',calculate);
currTwoPicker.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
amounttwo.addEventListener('input',calculate);
flipbutton.addEventListener('click',flip);

calculate();
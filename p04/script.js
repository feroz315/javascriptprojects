const currencyone = document.getElementById('currency-one');
const currencytwo = document.getElementById('currency-two');
const amountone = document.getElementById('amount-one');
const amounttwo = document.getElementById('amount-two');
const flipbutton = document.getElementById('flip');
const rate = document.getElementById('rate');

//Fetch exchange rate  3rd party N DOM update
//www.exchangerate-api.com 

function calculate() {
   
    const currone = currencyone.value;
    const currtwo = currencytwo.value;
     
    fetch(`https://v6.exchangerate-api.com/v6/e5fb6e78d4418611a6b4f55b/latest/${currencyone}`)
        .then( res => res.json() )
        .then( data => {
            const exchangeRate = data.conversion_rates[currtwo]
            console.log(exchangeRate);
//Display conversion rate
            rate.innerHTML = `1 ${currone} = ${exchangeRate} ${currtwo}`;
    });
        
//Apply conversion rate two
            currtwo.value = (currone.value * exchangeRate).toFixed(2);
}

//flip button click
function flip()  {
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value = temp;
    calculate();

}
//addeventlistener

currencyone.addEventListener('change',calculate);
currencytwo.addEventListener('change',calculate);
amountone.addEventListener('input',calculate);
amounttwo.addEventListener('input',calculate);
flipbutton.addEventListener('click',flip);

calculate();
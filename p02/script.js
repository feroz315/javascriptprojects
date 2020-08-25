const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.ouccpied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketprice = +movieSelect.Value;


// add listener method for container
container.addEventListener('click', (e) => {
    if(e.target.classlist.contains('seat') && !e.target.classlist.contains('ouccpied')){
      e.target.classlist.toggle('selected');
        updatecount();
        
    }           
})
 //add eventlistener for movie
movie.addEventListener('change', (e) => {
      ticketprice = +e.target.Value;
      updatecount();
})

//function update count selected
function updatecount(){
    const selectedseat = document.querySelectorAll('.row .seat.selected');
    const selectedcount = selectedseat.length;
   
    count.innerText = selectedcount;
    total.innerText = ticketprice*selectedcount;
}


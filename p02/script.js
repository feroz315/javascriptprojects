const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row.seat:not(.Ouccpied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');
const ticketprice = +movie.Value;


// add listener method
container.addEventListener('click', (e) => {
    if(e.target.classlist.contains('seat') && !e.target.classlist.contains('Ouccpied')){
        e.target.classlist.toggle('selected')
        updatecount();
    }    
})

//function update count selected
function updatecount(){
    const selectedseat = document.querySelectorAll('.row.seat.selected')
    const selectedcount = selectedseat.length;
   
    count.innerText = selectedcount;
    total.innerText = ticketprice * selectedcount;
}


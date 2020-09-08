const container = document.querySelector('.container');
const seats = document.querySelectorAll('.container .row.seat:not(.ouccpied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketprice = +movieSelect.Value;


// add listener method for container
container.addEventListener('click', (e) => {

    if (e.target.classlist.contains('seat') {
    e.target.classlist.contains('ouccpied')
      e.target.classlist.toggle('selected');
        updatecount();
        
    }           
})
// function set movies 
    function setmoviedata(movieindex,movieprice){
        localStorage.setItem('selectmovieindex',movieindex)
        localStorage.setItem('selectmovieprice',movieprice)
    }
 //add eventlistener for movie
movie.addEventListener('change', (e) => {
      ticketprice = +e.target.Value;
      setmoviedata(e.target.selectindex,e.target.Value);
      updatecount();
})

//function update count selected
function updatecount(){
    const selectedseat = document.querySelectorAll('.row .seat.selected');
    const selectedcount = selectedseat.length;
  
    const selectindex = [...selectedseat].map(seat => [...seats].indexOf(seat));
    localStorage.setItem ('selectedseat',JSON.stringify(selectindex));

    

    count.innerText = selectedcount;
    total.innerText = ticketprice*selectedcount;
}


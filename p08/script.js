const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const resultHeading = document.getElementById('result-heading');
const mealContainer = document.getElementById('meals');
const selectedMeal = document.getElementById('selected-meal');


// Function to search meal from API and fetch the data
function searchMeal(e) {
    e.preventDefault()

    // Get the search term form input field
    const term = search.value;
    
    if(term.trim()) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 resultHeading.innerHTML = `<h2>Search result for '${term}':</h2`
                 if(data.meals === null){
                   resultHeading.innerHTML = `<p>There are no search results for '${term}'please try anthor item.`
              }else{
                    mealContainer.innerHTML = data.meals.map( meal => ` 
                     <div class ="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" /> 
                    </div>
                  
                    `)                    
                 }
            })
    }else{
            alert('please enter a valid search.')
    }
 
}


// Event Listeners
// 1.Submit
submit.addEventListener('submit', searchMeal);
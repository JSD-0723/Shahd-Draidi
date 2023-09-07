let section =document.getElementById("cards-container");
let arr=[];
async function getApi(){
    let response= await fetch("https://tap-web-1.herokuapp.com/topics/list");
    let data= await response.json();
    arr=data;
    display(arr);
}
function display(arr){
    section.innerHTML="";
    for(let i=0;i<arr.length;i++){
        const rating = arr[i].rating; 
        const filledStars = Math.floor(rating);
        const fractionalPart = rating - filledStars;
        const stars = Array(5).fill('<ion-icon name="star-outline"></ion-icon>');

        // Fill the full stars
        for (let j = 0; j < filledStars; j++) {
            stars[j] = '<ion-icon name="star"></ion-icon>';
        }

        // Fill the stars based on the fractional part of the rating
        if (fractionalPart >= 0.25) {
            stars[filledStars] = '<ion-icon name="star-half"></ion-icon>';
        }

        if (fractionalPart >= 0.5) {
            stars[filledStars] = '<ion-icon name="star"></ion-icon>';
        }

        section.innerHTML+=`<a class="html-details" href="assets/html/details.html">
        <div class="card-sec" id="card-sec">
        <div class="card-img " style="background-image: url('assets/cards/${arr[i].image}')">
        </div>
        <div class="card-info">
            <p class="category truncate-text">${arr[i].category}</p>
            <h3 class="card-title categ2lines">${arr[i].topic}</h3>
            <div class="rating-stars">${stars.join('')}</div> <!-- Display the rating stars -->
            <p class="author-name">Author: ${arr[i].name}</p>
        </div>
        </div>
        </a>
    `;
    }
}
getApi();
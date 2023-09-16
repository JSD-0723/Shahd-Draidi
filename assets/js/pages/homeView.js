export function renderWebTopics(webTopics){//representation
    let webTopicsHtml="";
    let filterOpt=  [...new Set(webTopics.map(obj => obj.category))];
    webTopics.forEach(topic => {
        const rating = topic.rating; 
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

        webTopicsHtml+=`<a class="html-details" href="assets/html/details.html?id=${topic.id}">
        <div class="card-sec" id="card-sec">
        <div class="card-img " style="background-image: url('assets/cards/${topic.image}')">
        </div>
        <div class="card-info">
            <p class="category truncate-text">${topic.category}</p>
            <h3 class="card-title categ2lines">${topic.topic}</h3>
            <div class="rating-stars">${stars.join('')}</div> <!-- Display the rating stars -->
            <p class="author-name">Author: ${topic.name}</p>
        </div>
        </div>
        </a>
    `;
    });
    document.getElementById("cards-container").innerHTML=webTopicsHtml;
    //render filtered options
    let filterOptHtml='';
    filterOpt.forEach((opt)=>{
        filterOptHtml+=`<option value="${opt}" >${opt}</option>`;
    })
    document.getElementById('filter').innerHTML+=filterOptHtml;
}
export function onSearch(cb){
    document.querySelector('input').addEventListener('input', async (event) => {//presentation
        document.getElementById("cards-container").innerHTML="loading...";//presentation
        cb(event.target.value);
        });
}
export function onSort(cb){
    document.getElementById('sort').addEventListener('change', (event) => {//presentation
    cb(event.target.value) ;   
    });
}
export function onfilter(cb){
    document.getElementById('filter').addEventListener('change',(event)=>{
        cb(event.target.value);
    })
}
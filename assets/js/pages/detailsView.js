export function renderCardInfo(cardInfo){
    const subTopics=cardInfo.subtopics;
    let subTopicsHtml='';
    const rating = cardInfo.rating; 
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
    for(let i=0;i<subTopics.length;i++){
        subTopicsHtml+=`<li class="category">
        <ion-icon name="checkmark-circle-outline"></ion-icon> ${subTopics[i]}
      </li>`;
    }
    

  document.getElementById("cardInfoMain").innerHTML=` <div class="card-details">
  <div class="details-container">
     <div class="card-info">
      <p class="heading-para category">${cardInfo.category}</p>
      <h2 class="category">${cardInfo.topic}</h2>
      <div class="stars">
        ${stars.join('')}
      </div>
      <p class="card-desc card-para-cat">
      ${cardInfo.description}
      </p>
      <div class="topic-img">
        <div class="img-cont" style="background-image: url('../cards/${cardInfo.image}'")></div>
        <div class="topic-details">
            <p class="category"><span>${cardInfo.topic}</span> by <a href="#">${cardInfo.name}</a></p>
            <div class="add-favorites-container">
              <p class="category">Interested about this topic?</p>
              <button class="addfav-button category">
                Add to Favorites <ion-icon class="heart-icon"name="heart-outline"></ion-icon>
              </button>
              <p class="unlimited-credits category">Unlimited Credits</p>
            </div>
          </div>
        </div>
     </div>

  </div>
</div>
<section class="sub-topics-container">
  <h1 class="category">${cardInfo.topic} Sub Topics</h1>
  <ul>
    ${subTopicsHtml}
  </ul>
</section> 
`;
}

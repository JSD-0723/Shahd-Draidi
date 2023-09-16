export const loadWebTopics=async function(searchTerm){
    let response=await fetch(searchTerm? `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchTerm}`:
                                             `https://tap-web-1.herokuapp.com/topics/list`);//data fetching+state
    return await response.json();
}
export const loadCardInfo=async function(cardId){
    let response=await fetch(`https://tap-web-1.herokuapp.com/topics/details/${cardId}`);
    return await response.json();

}
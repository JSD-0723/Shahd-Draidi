import{renderWebTopics,onSearch, onSort,onfilter} from "./homeView.js";
import{sortTopics,filterTopics}from "./webTopicsUtills.js";
import{loadWebTopics}from "../apis.js";
import{debounce,uniqueRequest}from"../shared/asyncUtills.js";
let webTopics=[];//state
let sortBy="default";//state
let filterBy="default";//state
let searchTerm="";//state
const safeLoadTopics=uniqueRequest(loadWebTopics);
async function init(){//controller
    webTopics=await loadWebTopics(searchTerm);//state
   
    renderWebTopics(webTopics);//state

}  ;
onSearch(debounce(300,async(value)=>{
      searchTerm = value; //state
      try{
        webTopics=await safeLoadTopics(searchTerm);//state
        renderWebTopics(sortTopics(sortBy,webTopics));//state
        renderWebTopics(filterTopics(filterBy,webTopics));//state

      }

      catch(e){
         console.error(e);
      }
      
}));


onSort((value) => {
    sortBy = value; // Update the sortBy state
    let sortedArr = [];
  
    if (filterBy !== "default") {
      sortedArr = filterTopics(filterBy, webTopics); // First filter, then sort
      renderWebTopics(sortTopics(sortBy, sortedArr)); // Render sorted and filtered data
    } else if (filterBy === "default") {
      renderWebTopics(sortTopics(sortBy, webTopics)); // Render sorted data
    }
  });
  
onfilter((value) => {
    filterBy = value; // Update the filterBy state
    let filteredArr = [];
  
    if (sortBy !== "default") {
      filteredArr = sortTopics(sortBy, webTopics); // First sort, then filter
      renderWebTopics(filterTopics(filterBy, filteredArr)); // Render filtered and sorted data
    } else if (sortBy === "default") {
      renderWebTopics(filterTopics(filterBy, webTopics)); // Render filtered data
    }
});
  
    
init();  




const sortBySelect = document.getElementById('sort'); 
sortBySelect.addEventListener('change', () => {
    const sortByValue = sortBySelect.value;
    sortTopics(sortByValue);
});
function sortTopics(value){
    if (value === 'TopicTitle') {
        // Sort by Topic Title
        arr.sort((a, b) => a.topic.localeCompare(b.topic));
      } else if (value === 'AuthorName') {
        // Sort by Author Name
        arr.sort((a, b) => a.name.localeCompare(b.name));
      }
      display(arr);

      
}
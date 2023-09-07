const searchInput = document.querySelector('input');
searchInput.addEventListener('input', (input) => {
    let value = input.target.value.toLowerCase(); // Convert the input value to lowercase
        const filteredEle = arr.filter((ele) => {
        let topicLowercase = ele.topic.toLowerCase(); // Convert the topic to lowercase
        return topicLowercase.includes(value);
    });
    display(filteredEle);
});

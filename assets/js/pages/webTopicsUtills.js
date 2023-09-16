export function sortTopics(sortBy,webTopics){//webTopics utills
    let sortedTopics=[];
    switch(sortBy){
        case 'TopicTitle':
            sortedTopics=[...webTopics].sort((a, b) => a.topic.localeCompare(b.topic));
            break;
        case 'AuthorName':
            sortedTopics=[...webTopics].sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'default':
            sortedTopics=[...webTopics];
            break;

    }
    return sortedTopics;

}
export function filterTopics(filterBy,webTopics){//webTopics utills
    let filteredTopics=[];
    switch(filterBy){
        case 'default':
            filteredTopics=[...webTopics];
            break;
        default:
            filteredTopics = [...webTopics].filter(obj => filterBy.includes(obj.category));


    }
    return filteredTopics;

}
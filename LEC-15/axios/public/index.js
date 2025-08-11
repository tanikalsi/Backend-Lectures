// function to get comment data
// third party librRY
console.log(axios)
function getComment(URL){
    //how to send get req using axios
    axios.get(URL).then((data)=>{
        console.log(data);
    }).catch(err=>console.log(err))
}
getComment("https://jsonplaceholder.typicode.com/comments");
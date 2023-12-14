import axios from "axios";

const getUsers = () =>  axios.get("https://jsonplaceholder.typicode.com/users");
// const getUsers = async() => {

//     return fetch('https://jsonplaceholder.typicode.com/users');
// }

export default getUsers;
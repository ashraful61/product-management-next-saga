import axios from "axios";

const getProducts = () =>  axios.get("http://localhost:5000/api/v1/product");

export default getProducts;
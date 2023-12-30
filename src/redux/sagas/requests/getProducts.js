import axios from "axios";

const getProducts = () =>  axios.get("https://product-management-api-two.vercel.app/api/v1/product");

export default getProducts;
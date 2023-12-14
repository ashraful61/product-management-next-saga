import axios from "axios";

const getProducts = () =>  axios.get("https://product-management-4zbam5z0m-ashraful61.vercel.app/api/v1/product");

export default getProducts;
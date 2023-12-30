import axios from "axios";

const createProduct = (data) => axios.post("https://product-management-api-two.vercel.app/api/v1/product", data);

export default createProduct;


import {
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
  } from "../actionTypes";
  
  export const getProducts = () => ({ type: GET_PRODUCTS_START });
  export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload,
  });
  export const getProductsFailure = (payload) => ({
    type: GET_PRODUCTS_FAILURE,
    payload,
  });
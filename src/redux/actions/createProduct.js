import {
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
  } from "../actionTypes";
  
  export const createProduct = (payload) => ({ type: CREATE_PRODUCT_START, payload });
  export const createProductsSuccess = (payload) => ({
    type: CREATE_PRODUCT_SUCCESS,
    payload,
  });
  export const createProductFailure = (payload) => ({
    type: CREATE_PRODUCT_FAILURE,
    payload,
  });
import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
  } from "../actionTypes";
  
  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const reducers = (state = initialState, action) => {

    switch (action.type) {
      case GET_PRODUCTS_START: {
        return { ...state, isLoading: true };
      }
      case GET_PRODUCTS_SUCCESS: {
        return { ...state, isLoading: false, data: action.payload };
      }
      case GET_PRODUCTS_FAILURE: {
        return { ...state, isLoading: false, error: action.payload };
      }
      case CREATE_PRODUCT_START: {
        return { ...state, isLoading: true };
      }
      case CREATE_PRODUCT_SUCCESS: {
        console.log('ap',action.payload);
        const updatedProducts = [...state.data, action.payload.result];
        return { ...state, isLoading: false, data: updatedProducts };
      }
      case CREATE_PRODUCT_FAILURE: {
        return { ...state, isLoading: false, error: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducers;
  
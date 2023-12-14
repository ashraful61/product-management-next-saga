import { getProductsFailure, getProductsSuccess } from "../../actions/getProducts";
import { call, put } from "redux-saga/effects";
import getProductRequest from "../requests/getProducts";

export function* getProductsHandler() {
  try {
    const response = yield call(getProductRequest);
    console.log(response.data);
    yield put(getProductsSuccess(response.data.resultSet));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}

import { call, put } from "redux-saga/effects";
import { createProductFailure, createProductsSuccess } from "../../actions/createProduct";
import createProductRequest from "../requests/createProduct";

export function* createProductHandler(action) {
  try {
    const response = yield call(createProductRequest, action.payload);
    yield put(createProductsSuccess(response.data));
  } catch (error) {
    yield put(createProductFailure(error.message));
  }
}

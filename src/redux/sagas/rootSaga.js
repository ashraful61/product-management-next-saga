import { CREATE_USER_START, GET_USERS_START, GET_PRODUCTS_START } from "../actionTypes";
import { takeEvery } from "redux-saga/effects";
import { getUsersHandler } from "./handlers/getUsers";
import { getProductsHandler } from "./handlers/getProducts";
// import { createUserHandler } from "./handlers/createUser";

export function* watcherSaga() {
  yield takeEvery(GET_USERS_START, getUsersHandler);
  // yield takeEvery(CREATE_USER_START, createUserHandler);
  yield takeEvery(GET_PRODUCTS_START, getProductsHandler);
}

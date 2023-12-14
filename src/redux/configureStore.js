import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import usersReducer from "./reducers/users";
import productsReducer from "./reducers/products";


const reducers = combineReducers({
  users: usersReducer,
  products: productsReducer
});

const sageMiddleware = createSagaMiddleware();
const middleware = [sageMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sageMiddleware.run(watcherSaga);

export default store;

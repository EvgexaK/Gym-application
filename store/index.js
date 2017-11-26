import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

const Store = createStore(reducer);
export default Store;

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducer from "./reducers/index";

const Store = createStore(reducer, applyMiddleware(logger));
export default Store;

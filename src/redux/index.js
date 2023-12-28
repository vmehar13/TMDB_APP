import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import RootReducers from "./reducers"

export const store = createStore(
    RootReducers,
    applyMiddleware(thunk)
)
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";



const root = combineReducers({
    data:reducer
})



export const store = legacy_createStore(
    root,
    applyMiddleware(thunk)
)
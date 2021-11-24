import { combineReducers } from "redux";
import { peopleReducer } from "./peopleReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    pe: peopleReducer
});
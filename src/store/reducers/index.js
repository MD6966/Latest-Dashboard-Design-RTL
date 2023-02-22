import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import geyserHybridReducer from "./geyserHybridReducer";
import geyserReducer from './geyserReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    geyser: geyserReducer,
    geyserhybrid : geyserHybridReducer
})

export default rootReducer
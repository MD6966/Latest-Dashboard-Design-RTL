import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import fuelReducer from "./fuelReducer";
import geyserHybridReducer from "./geyserHybridReducer";
import geyserReducer from './geyserReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    geyser: geyserReducer,
    geyserhybrid : geyserHybridReducer,
    fuel : fuelReducer
})

export default rootReducer
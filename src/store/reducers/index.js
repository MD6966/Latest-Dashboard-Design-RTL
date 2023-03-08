import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import fuelReducer from "./fuelReducer";
import geyserHybridReducer from "./geyserHybridReducer";
import geyserReducer from './geyserReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    geyser: geyserReducer,
    geyserhybrid : geyserHybridReducer,
    fuel : fuelReducer,
    users: userReducer,
    
})

export default rootReducer
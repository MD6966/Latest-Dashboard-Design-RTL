import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import fuelReducer from "./fuelReducer";
import geyserHybridReducer from "./geyserHybridReducer";
import geyserReducer from './geyserReducer'
import userReducer from './userReducer';
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    geyser: geyserReducer,
    geyserhybrid : geyserHybridReducer,
    fuel : fuelReducer,
    users: userReducer,
    notification: notificationReducer,

    
})

export default rootReducer
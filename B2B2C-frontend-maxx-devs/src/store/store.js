import { configureStore } from "@reduxjs/toolkit";
import myStore from "./storeProduct/storeProduct";
import { cartReducer } from "./cartStore/cartSlice"
import userReducer from "./userAuth/userSlice"
import storage from "redux-persist/lib/storage"
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist"


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        user: userReducer,
        myStore: myStore,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware ({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

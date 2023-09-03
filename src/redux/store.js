import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/UserSlice";
import bookReducer from "./features/BookSlice";
import { api } from "./api";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookmarkReducer from "./features/BookmarkSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "bookmark"],
};

const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  bookmark :bookmarkReducer,

  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

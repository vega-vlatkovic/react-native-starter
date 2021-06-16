import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	blacklist: ["posts"],
	timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares =
	process.env.NODE_ENV !== "production"
		? [require("redux-immutable-state-invariant").default(), thunk, logger]
		: [thunk, logger];

export const store = createStore(
	persistedReducer,
	applyMiddleware(...middlewares)
);

export const persistor = persistStore(store, null);

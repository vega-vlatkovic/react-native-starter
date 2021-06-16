import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { PostsNavigator } from "./src/navigation/PostsNavigator";
import { persistor, store } from "./src/store";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<PostsNavigator />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

export default App;

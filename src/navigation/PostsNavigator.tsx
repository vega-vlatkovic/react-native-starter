import { RouteProp } from "@react-navigation/native";
import {
	createStackNavigator,
	StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";
import { ModulesScreen } from "../screens/ModulesScreen";
import { PostScreen, PostScreenRouteParams } from "../screens/PostScreen";
import { AppRoute } from "./routes";

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export type AppNavigatorParams = {
	[AppRoute.POSTS]: undefined;
	[AppRoute.POST]: PostScreenRouteParams;
};

export interface ModulesScreenProps {
	navigation: StackNavigationProp<AppNavigatorParams, AppRoute.POSTS>;
	route: RouteProp<AppNavigatorParams, AppRoute.POSTS>;
}

export interface PostScreenProps {
	navigation: StackNavigationProp<AppNavigatorParams, AppRoute.POST>;
	route: RouteProp<AppNavigatorParams, AppRoute.POST>;
}

const Stack = createStackNavigator();

export const PostsNavigator = (
	props: Partial<StackNavigatorProps>
): React.ReactElement => {
	return (
		<Stack.Navigator {...props}>
			<Stack.Screen name={AppRoute.POSTS} component={ModulesScreen} />
			<Stack.Screen name={AppRoute.POST} component={PostScreen} />
		</Stack.Navigator>
	);
};

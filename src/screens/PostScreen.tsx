import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import CustomText from "../components/CustomText";
import { PostScreenProps } from "../navigation/PostsNavigator";

export interface PostScreenRouteParams {
	post: any;
}

export const PostScreen: React.FC<PostScreenProps> = ({
	route,
}: PostScreenProps) => {
	const { Name, Title, SupportContent } = route.params.post || {};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{Title}</Text>
			<Text style={styles.body}>{Name}</Text>
			<CustomText>Tpasdasd</CustomText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	} as ViewStyle,
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 20,
	} as TextStyle,
	body: {
		fontSize: 14,
	} as TextStyle,
});

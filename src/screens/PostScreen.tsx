import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import PostModel from "../models/PostModel";
import { PostScreenProps } from "../navigation/PostsNavigator";

export interface PostScreenRouteParams {
	post: PostModel;
}

export const PostScreen: React.FC<PostScreenProps> = ({
	route,
}: PostScreenProps) => {
	const { title, body } = route.params.post || {};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.body}>{body}</Text>
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

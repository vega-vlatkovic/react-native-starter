import React, { useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList, SafeAreaView,
  StyleSheet, View, ViewStyle
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";
import Post from "../components/Post";
import { PostsScreenProps } from "../navigation/PostsNavigator";
import { ReduxDispatch, RootState } from "../reducers/rootReducer";

export const PostsScreen: React.FC<PostsScreenProps> = () => {
	const dispatch = useDispatch<ReduxDispatch>();
	const { posts, isLoading } = useSelector((state: RootState) => state.posts);

	const loadPosts = useCallback(() => {
		dispatch(getPosts());
	}, [dispatch]);

	useEffect(() => {
		loadPosts();
	}, [loadPosts]);

	return (
		<SafeAreaView style={styles.container}>
			<ActivityIndicator size={"large"} color={"black"} animating={isLoading} />
			<FlatList
				data={posts}
				showsVerticalScrollIndicator={false}
				style={styles.list}
				contentContainerStyle={styles.content}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <Post post={item} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	} as ViewStyle,
	separator: {
		height: 2,
		backgroundColor: "black",
	} as ViewStyle,
	list: {
		flex: 1,
	} as ViewStyle,
	content: {
		padding: 20,
	} as ViewStyle,
});

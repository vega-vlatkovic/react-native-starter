import React, { useCallback, useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	View,
	ViewStyle
} from "react-native";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/postActions";
import ModuleOne from "../components/ModuleOne";
import { articleRelatedGuide } from "../dummyData";
import { PostsScreenProps } from "../navigation/PostsNavigator";
import { ReduxDispatch } from "../reducers/rootReducer";


export const PostsScreen: React.FC<PostsScreenProps> = () => {
	const dispatch = useDispatch<ReduxDispatch>();
	// const { posts, isLoading } = useSelector((state: RootState) => state.posts);
	const [data, setData] = useState(articleRelatedGuide);

	const loadPosts = useCallback(() => {
		dispatch(getPosts());
	}, [dispatch]);

	useEffect(() => {
		loadPosts();
	}, [loadPosts]);

	return (
		<SafeAreaView style={styles.container}>
			{/* <ActivityIndicator size={"large"} color={"black"} animating={isLoading} /> */}
			<FlatList
				data={data.SubSections}
				showsVerticalScrollIndicator={false}
				style={styles.list}
				contentContainerStyle={styles.content}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={(item) => item.Name}
				renderItem={({ item }) => <ModuleOne post={item} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		// marginLeft: 30,
		// marginRight: 36,
	} as ViewStyle,
	separator: {
		height: 2,
		backgroundColor: "black",
	} as ViewStyle,
	list: {
		flex: 1,
	} as ViewStyle,
	content: {} as ViewStyle,
});

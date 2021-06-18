import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	View,
	ViewStyle,
} from "react-native";
import ModuleOne from "../components/ModuleOne";
import { articleRelatedGuide } from "../dummyData";
import { ModulesScreenProps } from "../navigation/PostsNavigator";

export const ModulesScreen: React.FC<ModulesScreenProps> = () => {
	// const { posts, isLoading } = useSelector((state: RootState) => state.posts);
	const [data, setData] = useState(articleRelatedGuide);

	// console.log(data);

	// const loadPosts = useCallback(() => {
	// 	dispatch(getPosts());
	// }, [dispatch]);

	// useEffect(() => {
	// 	loadPosts();
	// }, [loadPosts]);

	return (
		<SafeAreaView style={styles.container}>
			{/* <ActivityIndicator size={"large"} color={"black"} animating={isLoading} /> */}
			<FlatList
				data={data.SubSections}
				showsVerticalScrollIndicator={false}
				style={styles.list}
				// contentContainerStyle={styles.content}
				// ItemSeparatorComponent={() => <View style={styles.separator} />}
				keyExtractor={(item) => item.Name}
				renderItem={({ item }) => <ModuleOne item={item} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 30,
	} as ViewStyle,
	// separator: {
	// 	height: 2,
	// 	backgroundColor: "black",
	// } as ViewStyle,
	list: {
		flex: 1,
	} as ViewStyle,
	content: {} as ViewStyle,
});

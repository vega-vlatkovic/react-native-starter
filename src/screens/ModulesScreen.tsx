import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native";
import ModuleThree from "../components/Module Three";
import ModuleFive from "../components/ModuleFive";
import ModuleFour from "../components/ModuleFour";
import ModuleOne from "../components/ModuleOne";
import ModuleTwo from "../components/ModuleTwo";
import { articleRelatedGuide } from "../dummyData";
import { ModulesScreenProps } from "../navigation/PostsNavigator";

export const ModulesScreen: React.FC<ModulesScreenProps> = () => {
	// const { posts, isLoading } = useSelector((state: RootState) => state.posts);
	const [data, setData] = useState(articleRelatedGuide);

	// const loadPosts = useCallback(() => {
	// 	dispatch(getPosts());
	// }, [dispatch]);

	// useEffect(() => {
	// 	loadPosts();
	// }, [loadPosts]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{data.SubSections.map((item) => (
					<ModuleFour
						item={item}
						key={item.Name}
						onPress={(_) => console.log("Module Four")}
					/>
				))}
				{data.SubSections.map((item) => (
					<ModuleFive
						item={item}
						key={item.Name}
						onPress={(_) => console.log("Module Four")}
					/>
				))}
				{data.SubSections.map((item) => (
					<ModuleThree
						item={item}
						key={item.Name}
						onPress={(_) => console.log("Module Three")}
					/>
				))}
				{data.SubSections.map((item) => (
					<ModuleOne
						item={item}
						key={item.Name}
						onPress={(_) => console.log("Module One")}
					/>
				))}
				{data.SubSections.map((item) => (
					<ModuleTwo
						item={item}
						key={item.Name}
						onPress={(_) => console.log("Module Two")}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: "7%",
	} as ViewStyle,
	list: {
		flex: 1,
	} as ViewStyle,
	content: {} as ViewStyle,
});

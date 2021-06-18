import * as React from "react";
import { useEffect, useState } from "react";
import {
	Dimensions,
	Image,
	ImageStyle,
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle,
} from "react-native";
import { TOUCHED } from "../constants/constants";
import { BODY_LABEL, BUTTON_1 } from "../constants/fonts";
import { ModuleProps } from "./ModuleOne";

const { height: h, width } = Dimensions.get("screen");

const ModuleThree: React.FC<ModuleProps> = ({ item, onPress }) => {
	const [touched, setTouched] = useState(false);
	const { BackgroundImageUrl, IntroText, Name, Touched } = item;

	useEffect(() => {
		setTouched(Touched);
	}, []);

	return (
		<Pressable style={[styles.container, touched && TOUCHED]} onPress={onPress}>
			{!!BackgroundImageUrl && (
				<Image source={{ uri: BackgroundImageUrl }} style={styles.image} />
			)}
			<Text style={[styles.title, BUTTON_1]} numberOfLines={3}>
				{Name}
			</Text>
			<View style={styles.bottomText}>
				<Text style={[BODY_LABEL]}>3 guides</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
	} as ViewStyle,
	bottomText: {} as TextStyle,
	container: {
		backgroundColor: "white",
		borderRadius: 8,
		elevation: 2,
		marginVertical: 10,
		padding: 12,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		width: width / 2,
	} as ViewStyle,
	description: {
		flexWrap: "wrap",
	} as TextStyle,
	image: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		resizeMode: "cover",
		height: h / 10,
	} as ImageStyle,
	title: {
		paddingVertical: 10,
		fontSize: 18,
		fontWeight: "bold",
		margin: 3,
		flexWrap: "wrap",
	} as TextStyle,
});

export default ModuleThree;

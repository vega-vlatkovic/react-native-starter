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
	ViewStyle,
} from "react-native";
import { TOUCHED } from "../constants/constants";
import { BUTTON_1 } from "../constants/fonts";
import { ModuleProps } from "./ModuleOne";

const { height: h, width } = Dimensions.get("screen");

const ModuleFour: React.FC<ModuleProps> = ({ item, onPress }) => {
	const [height, setHeight] = useState(0);
	const [touched, setTouched] = useState(false);
	const { BackgroundImageUrl, IntroText, Name, Touched } = item;

	useEffect(() => {
		setTouched(Touched);

		BackgroundImageUrl &&
			Image.getSize(BackgroundImageUrl, (width, height) => setHeight(height));
	}, []);

	return (
		<Pressable style={[styles.container, touched && TOUCHED]} onPress={onPress}>
			{!!BackgroundImageUrl && (
				<Image source={{ uri: BackgroundImageUrl }} style={styles.image} />
			)}
			<Text style={[styles.title, BUTTON_1]}>{Name}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		paddingLeft: 12,
		flex: 1,
	} as ViewStyle,
	bottomContainerText: {} as TextStyle,
	bottomText: {
		justifyContent: "flex-end",
	} as TextStyle,
	container: {
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 8,
		elevation: 2,
		marginVertical: 10,
		padding: 12,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
	} as ViewStyle,
	description: {
		flexWrap: "wrap",
	} as TextStyle,
	image: {
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		resizeMode: "cover",
		width: "33%",
		height: h / 8,
	} as ImageStyle,
	title: {
		fontSize: 18,
		fontWeight: "bold",
		margin: 3,
		flexWrap: "wrap",
	} as TextStyle,
});

export default ModuleFour;

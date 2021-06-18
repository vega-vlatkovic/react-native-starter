import * as React from "react";
import { useEffect, useState } from "react";
import {
	Dimensions, Image,
	ImageStyle,
	Pressable,
	StyleSheet,
	Text,
	TextStyle,
	View,
	ViewStyle
} from "react-native";
import { TOUCHED } from "../constants/constants";
import { BODY_1, BODY_LABEL_BLUE, BUTTON_1 } from "../constants/fonts";
import Module from "../models/Module";

interface Props {
	item: Module;
}

const { height: h, width } = Dimensions.get("screen");

const ModuleTwo: React.FC<Props> = ({ item }) => {
	const [height, setHeight] = useState(0);
	const [touched, setTouched] = useState(false);
	console.log(h, width);
	const { BackgroundImageUrl, IntroText, Name, Touched } = item;

	useEffect(() => {
		setTouched(Touched);

		BackgroundImageUrl &&
			Image.getSize(BackgroundImageUrl, (width, height) => setHeight(height));
	}, []);

	console.log(height);

	return (
		<Pressable style={[styles.container, touched && TOUCHED]}>
			{!!BackgroundImageUrl && (
				<Image source={{ uri: BackgroundImageUrl }} style={styles.image} />
			)}
			<View style={styles.textContainer}>
				<Text style={[styles.title, BUTTON_1]}>{Name}</Text>
				<Text style={[BODY_1, styles.description]} lineBreakMode={"tail"}>
					{IntroText.length < 35
						? `${IntroText}`
						: `${IntroText.substring(0, 50)}...`}
				</Text>
				<View style={styles.bottomText}>
					<Text style={[BODY_LABEL_BLUE]}>Exercise</Text>
				</View>
			</View>
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

export default ModuleTwo;

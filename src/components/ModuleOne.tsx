import * as React from "react";
import { useEffect, useState } from "react";
import {
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
import Module from "../models/Module";

interface Props {
	item: Module;
}

const MAX_HEIGTH = 100;

const ModuleOne: React.FC<Props> = ({ item }) => {
	const [height, setHeight] = useState(0);
	const [touched, setTouched] = useState(false);

	const { BackgroundImageUrl, Title, Name, Touched } = item;

	useEffect(() => {
		setTouched(Touched);

		BackgroundImageUrl &&
			Image.getSize(BackgroundImageUrl, (width, height) => setHeight(height));
	}, []);

	console.log(height);

	return (
		<Pressable style={[styles.container, touched && TOUCHED]}>
			{!!BackgroundImageUrl && (
				<Image
					source={{ uri: BackgroundImageUrl }}
					style={{
						...styles.image,
						height: MAX_HEIGTH > height ? height : MAX_HEIGTH,
					}}
				/>
			)}
			<Text style={[styles.title, BUTTON_1]}>{Name}</Text>
			<View style={styles.bottomContainer}>
				<Text style={BODY_LABEL}>5 mins | 7 chapters</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	bottomContainer: {
		flexDirection: "column",
	} as ViewStyle,
	bottomContainerText: {} as TextStyle,
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
	} as ViewStyle,
	image: {
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		resizeMode: "cover",
	} as ImageStyle,
	title: {
		fontSize: 18,
		fontWeight: "bold",
		margin: 5,
		marginVertical: 20,
	} as TextStyle,
});

export default ModuleOne;

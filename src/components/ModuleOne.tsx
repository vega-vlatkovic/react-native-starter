import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
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
import { AppRoute } from "../navigation/routes";

interface Props {
	post: any;
}

const ModuleOne: React.FC<Props> = ({ post }: any) => {
	const [height, setHeight] = useState(0);
	const [touched, setTouched] = useState(false);
	const navigation = useNavigation();

	const { BackgroundImageUrl, Title, Name, Touched } = post;

	useEffect(() => {
		setTouched(Touched);

		BackgroundImageUrl &&
			Image.getSize(BackgroundImageUrl, (width, height) => setHeight(height));
	}, []);

	const handleNavigation = useCallback(() => {
		navigation.navigate(AppRoute.POST, { post });
	}, [navigation, post]);

	return (
		<Pressable
			onPress={handleNavigation}
			style={[styles.container, touched && TOUCHED]}
		>
			{!!BackgroundImageUrl && (
				<Image
					source={{ uri: BackgroundImageUrl }}
					style={{ ...styles.image, height }}
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
		flex: 1,
		padding: 12,
		marginVertical: 10,
		borderRadius: 8,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		elevation: 2,
		backgroundColor: "white",
	} as ViewStyle,
	image: {
		maxHeight: 140,
		resizeMode: "cover",
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
	} as ImageStyle,
	title: {
		margin: 5,
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 20,
	} as TextStyle,
});

export default ModuleOne;

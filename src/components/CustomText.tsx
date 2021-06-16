import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface CustomTextProps extends TextProps {
	children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ children, ...props }) => (
	<Text {...props} style={[props.style, styles.text]}>
		{children}
	</Text>
);

export default CustomText;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontFamily: "OpenSans-Regular",
	} as TextStyle,
});

import { TextStyle } from "react-native";
import Colors, { Opacity } from "./colors";

export const TITLE_INTRO_BOLD = {
	color: Colors.WHITE,
	fontFamily: "Avenir-Heavy",
	fontSize: 40,
	lineHeight: 48,
	textAlign: "left",
} as TextStyle;

export const TITLE_INTRO_LIGHT = {
	color: Colors.WHITE,
	fontFamily: "Avenir-Medium",
	fontSize: 40,
	lineHeight: 48,
	textAlign: "left",
} as TextStyle;

export const TOUR_BOLD = {
	color: Colors.WHITE,
	fontFamily: "Avenir Black",
	fontSize: 28,
	letterSpacing: -0.28,
	lineHeight: 36,
	textAlign: "left",
} as TextStyle;

export const TOUR_LIGHT = {
	color: Colors.WHITE,
	fontFamily: "Avenir-Medium",
	fontSize: 28,
	letterSpacing: -0.31,
	lineHeight: 36,
	textAlign: "left",
} as TextStyle;

export const TITLE_1 = {
	color: Colors.getCompanionPurpleMid(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 28,
	lineHeight: 36,
	textAlign: "left",
} as TextStyle;

export const TITLE_2 = {
	color: Colors.getCompanionPurpleMid(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 18,
	letterSpacing: -0.18,
	lineHeight: 30,
	textAlign: "left",
} as TextStyle;

export const TITLE_3 = {
	color: Colors.getCompanionPurpleMid(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 16,
	letterSpacing: -0.18,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BODY_1 = {
	color: Colors.GREY_5,
	fontFamily: "Avenir-Book",
	fontSize: 14,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BODY_2 = {
	color: Colors.GREY_5,
	fontFamily: "Avenir-Book",
	fontSize: 16,
	letterSpacing: -0.18,
	lineHeight: 30,
	textAlign: "left",
} as TextStyle;

export const BODY_3 = {
	color: Colors.GREY_5,
	fontFamily: "Avenir-Medium",
	fontSize: 16,
	letterSpacing: -0.18,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BODY_4_QUOTE = {
	color: Colors.getCompanionPurpleDark(Opacity.SOLID),
	fontFamily: "Avenir-Book",
	fontSize: 26,
	lineHeight: 36,
	textAlign: "left",
} as TextStyle;

export const BODY_5 = {
	color: Colors.GREY_5,
	fontFamily: "Avenir-Roman",
	fontSize: 12,
	lineHeight: 18,
	textAlign: "left",
} as TextStyle;

export const BODY_LABEL = {
	color: Colors.getCompanionPurpleDark(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 12,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BODY_LABEL_BLUE = {
	color: Colors.getCompanionBlue(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 12,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BODY_LABEL_RED = {
	color: Colors.getCompanionRed(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 12,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BUTTON_1 = {
	color: Colors.getCompanionPurpleMid(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 16,
	letterSpacing: -0.18,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const BUTTON_2 = {
	color: Colors.WHITE,
	backgroundColor: Colors.getCompanionPurpleDark(Opacity.SOLID),
	fontFamily: "Avenir-Heavy",
	fontSize: 14,
	lineHeight: 22,
	textAlign: "left",
} as TextStyle;

export const NAV_LABEL = {
	color: Colors.GREY_4,
	fontFamily: "Avenir-Black",
	fontSize: 8,
	lineHeight: 11,
	textAlign: "left",
} as TextStyle;

export const NAV_LABEL_SELECTED = {
	color: Colors.getCompanionPurpleMid(Opacity.SOLID),
	fontFamily: "Avenir-Black",
	fontSize: 8,
	lineHeight: 11,
	textAlign: "left",
} as TextStyle;

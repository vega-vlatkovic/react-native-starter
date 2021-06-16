export enum Opacity {
	SOLID = 100,
	SEVENTY_FIVE = 75,
	FIFTY = 50,
	TWENTY_FIVE = 25,
	TEN = 10,
	FIVE = 5,
}

export default class Colors {
	static readonly BLACK = "rgba(0, 0, 0, 1)";
	static readonly GREY_5 = "rgba(64, 64, 64, 1)";
	static readonly GREY_4 = "rgba(128, 128, 128, 1)";
	static readonly GREY_3 = "rgba(190, 190, 190, 1)";
	static readonly GREY_2 = "rgba(229, 229, 229, 1)";
	static readonly GREY_1 = "rgba(242, 242, 242, 1)";
	static readonly WHITE = "rgba(255,255,255, 1)";

	static getCompanionPurpleMid = (opacity: Opacity) =>
		`rgba(33,44,88,${opacity / 100})`;

	static getCompanionRed = (opacity: Opacity) =>
		`rgba(247,106,85,${opacity / 100})`;

	static getCompanionPurpleDark = (opacity: Opacity) =>
		`rgba(22,31,60,${opacity / 100})`;

	static getCompanionGreen = (opacity: Opacity) =>
		`rgba(27,157,122,${opacity / 100})`;

	static getCompanionYellow = (opacity: Opacity) =>
		`rgba(239,225,133,${opacity / 100})`;

	static getCompanionBlue = (opacity: Opacity) =>
		`rgba(35,173,209,${opacity / 100})`;
}

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require("metro-config");

const reactNativeSvgTransformer = (async () => {
	const {
		resolver: { sourceExts, assetExts },
	} = await getDefaultConfig();
	return {
		transformer: {
			babelTransformerPath: require.resolve("react-native-svg-transformer"),
		},
		resolver: {
			assetExts: assetExts.filter((ext) => ext !== "svg"),
			sourceExts: [...sourceExts, "svg"],
		},
	};
})();

const defaultConfig = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: false,
			},
		}),
	},
};

module.exports = mergeConfig(reactNativeSvgTransformer, defaultConfig);

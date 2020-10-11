module.exports = function (config) {
	config.set({
		basePath: "",
		frameworks: ["jasmine", "karma-typescript"],
		include: ["**/*.ts"],
		exclude: ["node_modules", "**/*.js"],
		coverageReporter: {
			type: "html",
			dir: "coverage/",
		},
		reporters: ["progress", "dots", "coverage"],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		browsers: ["Chrome"],
		singleRun: false,
		plugins: [
			"karma-jasmine",
			"karma-chrome-launcher",
			"karma-typescript",
			"karma-chrome-launcher",
			"karma-coverage",
		],
	});
};

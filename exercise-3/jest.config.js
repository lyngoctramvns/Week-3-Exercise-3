module.exports = {
	testTimeout: 60000,
	testEnvironment: "node",
	testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
	reporters: [
		"default",
		[
			"./node_modules/jest-html-reporter",
			{
				pageTitle: "Test Report",
        includeStackTrace: true
			},
		],
	],
	collectCoverage: true,
	coverageReporters: ["lcov", "text-summary"],
	coverageDirectory: "coverage",
	collectCoverageFrom: ["src/**/*.js"],
};

/* eslint-env node */
"use strict";

let path = require("path");

module.exports = {
	entry: path.resolve("./index.js"),
	output: {
		path: path.resolve("./dist"),
		filename: "bundle.js"
	},
	resolve: {
		root: path.resolve("./node_modules")
	},
	module: {
		loaders: [{
			loader: "babel-loader",
			query: {
				presets: ["es2015"],
				cacheDirectory: true
			}
		}]
	}
};

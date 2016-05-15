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
		root: path.resolve("./node_modules"),
		extensions: ["", ".js", ".jsx"]
	},
	module: {
		loaders: [{
			loader: "babel-loader",
			query: { // also see `package.json`
				cacheDirectory: true
			}
		}]
	}
};

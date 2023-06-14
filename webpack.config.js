const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const mode = process.env.NODE_ENV

module.exports = {
    mode,
    entry: "./src/index.js",
    output: {
        filename: (mode === "production") ? "[hash].js" : "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    new CleanWebpackPlugin()
    ],
}
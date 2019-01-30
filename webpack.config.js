const path = require("path");
module.exports = {
  mode: "development",
  devServer: {
    headers: {
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Range",
      "Access-Control-Allow-Origin": "*"
    },
    port: 8080
  },
  entry: "./src/skills.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "skills.js",
    publicPath: "/skills/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        loaders: ["babel-loader"]
      }
    ]
  }
};

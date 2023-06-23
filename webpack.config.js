const path = require("path");

module.exports = {
  entry: "components/",
  resolve: {
    extensions: [".index.ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};

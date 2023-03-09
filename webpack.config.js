module.exports = {
  module: {
    rules: [
      {
        test: /less\/\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
};

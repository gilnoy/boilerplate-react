module.exports = {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/,loader: "awesome-typescript-loader" },
  
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
      ]
    },
  };
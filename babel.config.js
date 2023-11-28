module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "root": ["./"],
        "alias": {
          "@assets": './src/assets',
          "@components": './src/components',
          "@hooks": './src/hooks',
          "@store": './src/store',
          "@testing": './src/testing',
          "src": "./src"
        }
      }]
    ]
  };
};

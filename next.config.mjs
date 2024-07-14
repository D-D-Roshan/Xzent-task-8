
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/media',
            outputPath: 'static/media',
            name: '[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };

  // next.config.js
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/images',
            outputPath: 'static/images',
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  
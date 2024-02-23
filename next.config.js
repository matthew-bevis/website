const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    // Custom Webpack rules for other file types
    if (!options.isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4|webm|ogg|mp3|wav|flac|aac|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]',
        },
      });
    }

    // Return the updated configuration
    return config;
  },

  // Next.js Image Optimization for external domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user.bulkitrade.com',
      }
    ],
  },

  // Additional Next.js configuration options here
});

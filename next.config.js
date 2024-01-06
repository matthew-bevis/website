
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4|webm|ogg|mp3|wav|flac|aac|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[hash][ext][query]',
        },
        
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // You can adjust the limit as needed
            name: 'fonts/[name].[ext]',
            esModule: false, // This is important for url-loader to work with ES modules
          },
        },
      });
    }

    return config;
  },
  images: {
          domains: ['user.bulkitrade.com'],
        },
};

module.exports = nextConfig;

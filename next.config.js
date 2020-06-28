//next.config.js
// module.exports = {
//   webpack: function(config) {
//     config.module.rules.push({
//       test: /\.md$/,
//       use: 'raw-loader',
//     })
//     return config
//   },
// }

const glob = require('glob');
const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

], 
    {
      buildDir: 'build',
      distDir: 'dist',
      outDir: '_DEPLOY',
      generateBuildId: async () => {
        // When process.env.YOUR_BUILD_ID is undefined we fall back to the default
        if (process.env.GREGORY_COWLEY_COM) {
          return process.env.GREGORY_COWLEY_COM
        }
        return null
      },
      webpack: function (config) {
        config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader"
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "file-loader",
            options: {
              limit: 25000,
            },
          },
        });
        return config;
      },
      exportPathMap: async function () {
        const routes = {
          '/': { page: '/' },
          "/about": { page: "/about" },
          "/portfolio": { page: "/portfolio" }
        }
        return routes
      }
    }  
);

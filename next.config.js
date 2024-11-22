// next.config.cjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.m?js/,
      resolve: {
        fullySpecified: false, // This allows .mjs and .js files without full specification
      },
    });
    return config;
  },
};

module.exports = nextConfig;

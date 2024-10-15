/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;

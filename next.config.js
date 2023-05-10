/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.optimization.splitChunks.cacheGroups = {
            common: {
                name: "common",
                chunks: "all",
            },
        };
        return config
    },
};

module.exports = nextConfig

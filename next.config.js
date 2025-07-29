/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/job',
    assetPrefix: '/job/',
};

module.exports = nextConfig;

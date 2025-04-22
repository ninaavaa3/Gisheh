// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// };



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gisheh.s3.ir-thr-at1.arvanstorage.ir',
        port: '', // Explicitly allow all ports (empty string)
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'gisheh7.ir',
      },
    ],
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  // images: {
  //   domains: ['example.com']
  // }
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/hello',
  //       permanent: true,
  //     }
  //   ]
  // }
}

module.exports = nextConfig

// const withPWA = require('next-pwa');
// /** @type {import('next').NextConfig} */


// const nextConfig = withPWA({
//   //**You need to install the dependencie next-pwa
//   pwa: {
//     dest: 'public',
//     register: true,
//     mode: 'production',
//     disable: 'false',
//   },
//   reactStrictMode: true,
//   // images: {
//   //   domains: ['example.com']
//   // }
//   // env: {
//   //   customKey: 'customValue',
//   // },
//   // basePath: '/dist',
//   // compress: true,
//   // async redirects() {
//   //   return [
//   //     {
//   //       source: '/hola',
//   //       destination: '/hello',
//   //       permanent: true,
//   //     }
//   //   ]
//   // }
// })

// module.exports = nextConfig

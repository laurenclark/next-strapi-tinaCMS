require('dotenv').config()

module.exports = {
    env: {
        STRAPI_URL: process.env.STRAPI_URL
    }
}
// module.exports = {
//     async rewrites() {
//         return [
//             {
//                 source: '/backend/:path*',
//                 destination: 'https://example.com/:path*'
//             }
//         ]
//     }
// }

// module.exports = {
//     async redirects() {
//         return [
//             {
//                 source: '/about',
//                 destination: '/',
//                 permanent: true
//             }
//         ]
//     }
// }

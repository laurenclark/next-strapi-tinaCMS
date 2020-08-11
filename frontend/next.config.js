require('dotenv').config()

module.exports = {
    env: {
        STRAPI_URL: process.env.STRAPI_URL
    },
    async rewrites() {
        return [
            {
                source: '/preview',
                destination: '/api/preview'
            },
            {
                source: '/reset-preview',
                destination: '/api/reset-preview'
            }
        ]
    }
    // async redirects() {
    //     return [
    //         {
    //             source: '/example',
    //             destination: '/',
    //             permanent: true
    //         }
    //     ]
    // }
}

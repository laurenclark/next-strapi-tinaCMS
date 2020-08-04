module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        url: '/dashboard',
        auth: {
            secret: env('ADMIN_JWT_SECRET', '1bd1e325d66f4c8466471892f1121be8')
        }
    }
})

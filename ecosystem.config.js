module.exports = {
    apps: [
        {
            name: 'IBLIS',
            script: 'node ./server/index.mjs',
            env: {
                PORT: 8001,
                NODE_ENV: 'production'
            }
        },
        {
            name: 'Iblis docs',
            script: 'serve',
            env: {
                PM2_SERVE_PATH: './vite',
                PM2_SERVE_PORT: 4173,
                PM2_SERVE_SPA: 'true',
                NODE_ENV: 'production'
            }
        },
        {
            name: 'Iblis Reception',
            script: 'serve',
            env: {
                PM2_SERVE_PATH: './iblis_reception',
                PM2_SERVE_PORT: 8002,
                PM2_SERVE_SPA: 'true',
                NODE_ENV: 'production'
            }
        }
    ]
}

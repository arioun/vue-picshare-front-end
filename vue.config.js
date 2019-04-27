module.exports = {
    devServer: {
        open: true,
        host: '13.75.71.92',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://188.131.192.194/home',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
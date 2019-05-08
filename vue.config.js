module.exports = {
    devServer: {
        open: true,
        host: 'pictureshare.me',
        port: 80,
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
    },
    productionSourceMap:false,
};
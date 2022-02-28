const proxy = require('http-proxy-middleware');
module.exports = function (app: any) {
    app.use(proxy('/api', {
        target: "http://172.0.0.1:8000",
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
};
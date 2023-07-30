const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app){
    app.use(
        createProxyMiddleware('/SpcdeInfo',
            {
                target: 'https://apis.data.go.kr',
                changeOrigin: true,
                pathRewrite: {
                    '^/SpcdeInfo': '', // /api 경로를 공공데이터 포털의 루트로 리다이렉트합니다.
                  },
            }
        )
    )
}
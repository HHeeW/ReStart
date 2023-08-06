const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        createProxyMiddleware(
            '/dateApi',//proxy가 필요한 path prameter를 입력합니다.
            {
                target: 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/',//타겟이 되는 api url를 입력합니다.
                changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
            }
        )
    )
}
const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const history = require('connect-history-api-fallback')
// 引入第三方路由
const proxyConf = require('./proxy')
const headerConf = {
  referer: 'https://www.v2ex.com',
  host: 'www.v2ex.com',
}

let apiRoutes = express.Router()

// 分页controller
function pageController(params, data) {
    if (params.page && params.page_size) {
        return data.slice((params.page - 1) * params.page_size, params.page * params.page_size)
    }
    return data
}

for (let k in proxyConf) {
    apiRoutes.get(k, function(req, res) {
        // console.log(proxyConf[k])
        axios.get(proxyConf[k], {
            headers: headerConf,
            params: req.query,
        }).then(response => {
            console.log(req.query)
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json(pageController(req.query, response.data))
        }).catch(e => {
            res.status = 500
            res.end(e)
        })
    })
}
app.use(history())
app.use('/', apiRoutes)
app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 3000
app.listen(port)
console.log('server started ' + port)

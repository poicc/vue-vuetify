//模拟数据
const express = require('express')
const app = express()
//粉丝数据
let user = require('./src/data/user.json')
let apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true,
    before(app) {
      app.get('/api/user', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: user
        })
      })
    }
  },
  transpileDependencies: ['vuetify']
}

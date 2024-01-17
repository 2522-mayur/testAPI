
const path = require('path')
//const helmet = require('helmet');
let express = require('express')
global.config = require('./config/data/config.json')
let indexRouter = require('./routes/index')
const getUrlPrefix = config.app.prefix
let app = express()

app.use('/', indexRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
})


const port = process.env.PORT || config.server.port
let server = app.listen(port)

console.log('Api is running on port', port)
console.log(`try this url http://localhost:${port}${getUrlPrefix}/ping`)

module.exports = app
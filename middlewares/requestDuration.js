const moment = require('moment')

function requestDuration(req, res, next) {
  const dateObject = new Date()
  // use moment
  const dateStringWithTime = moment(dateObject).format('YYYY-MM-DD HH:mm:ss')
  const requestMethod = req.method
  const requestPath = req.url

  console.log(`${dateStringWithTime} | ${requestMethod} from ${requestPath}`)
  next()
}

module.exports = requestDuration

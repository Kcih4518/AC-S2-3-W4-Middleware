const moment = require('moment')
const fs = require('fs')

function requestDuration(req, res, next) {
  const dateObject = new Date()
  // use moment
  const dateStringWithTime = moment(dateObject).format('YYYY-MM-DD HH:mm:ss')
  const requestMethod = req.method
  const requestPath = req.url
  const requestLog = `${dateStringWithTime} | ${requestMethod} from ${requestPath}\n`

  fs.appendFile('./logs/request.txt', requestLog, (error) => {
    if (error) console.log(error)
  })

  next()
}

module.exports = requestDuration

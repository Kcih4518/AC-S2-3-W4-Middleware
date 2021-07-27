const moment = require('moment')
const fs = require('fs')

function requestDuration(req, res, next) {
  const dateObjectStart = new Date()
  const requestMethod = req.method
  const requestPath = req.url

  res.on('finish', () => {
    const dateObjectEnd = new Date()
    const durationTime = dateObjectEnd - dateObjectStart
    const dateWithTime = moment(dateObjectStart).format('YYYY-MM-DD HH:mm:ss')
    const requestLog = `${dateWithTime} | ${requestMethod} from ${requestPath} | total time: ${durationTime}ms\n`
    fs.appendFile('./logs/request.txt', requestLog, (error) => {
      if (error) console.log(error)
    })
  })

  next()
}

module.exports = requestDuration

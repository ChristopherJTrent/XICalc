var express = require('express')

const app = express()

const port = 5500

app.use('/', express.static('./public'))

app.listen(port, () => {
    console.log('listening on port ' + port)
})
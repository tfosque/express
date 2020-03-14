let express = require('express')
let app = express()

let employeesRoute = require('./routes/employees')

app.use(express.static('public'))

app.use(employeesRoute)

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log({PORT}))
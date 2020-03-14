let express = require('express')
let router = express.Router()

// 
router.get('/employees', (req, res) => {
    res.send(`You have requested an employee file`)
})
// Get Employee by Params
router.get('/employees/:name', (req, res) => {
    res.send(`You have requested an employee file ${req.params.name}`)
})

module.exports = router
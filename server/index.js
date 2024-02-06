const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Version 1.0.0</h1>')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})
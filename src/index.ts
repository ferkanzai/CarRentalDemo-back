const app = require('./app')

const PORT = 2222

app.listen(PORT, () => {
    console.log(`> Server alive! Listening on http://localhost:${PORT}`)
})
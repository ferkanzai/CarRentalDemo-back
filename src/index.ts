const app = require('express')()

const PORT = 2222

app.listen(PORT, () => {
    console.log(`> Server alive! Listening on http://localhost:${PORT}`)
})
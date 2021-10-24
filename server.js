const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    const file = `${__dirname}/sample.png`;
    res.download(file); // Set disposition and send it.̥
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/tweets', (req, res) => {
    console.log(req.query)
    const query = req.query.q;
    const count = req.query.count;

    const url = "https://api.twitter.com/1.1/search/tweets.json"
    axios.get(url, {
        params: {
            q: query,
            count: count
        },
        headers: {
            "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAALGBKQEAAAAA9X3IxQU9%2Bbyju3u%2FAei7gQcWQV4%3DwTCf5rRmLRJX5jisOWbJwPD6aKDbiWwuWOfsVnlRuLWFdu0Kye"
        }
    }).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log(`Twitter API listening at http://localhost:${port}`)
})
const express = require('express')

const app = express()

app.listen(3000)
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname})
    //Ayarları belirttiğimiz bir nesne gönderiyoruz, root olarak ana dizini vermemiz yeterli.
})

app.get('/about', (req,res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})


})



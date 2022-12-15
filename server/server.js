const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    //req browserdan gelen bilgileri tutan bir nesne

    res.setHeader('Content-Type', 'text/html')

    // res.write('<head><title>Node.js learning</title></head>')
    // res.write('<h1>Hello world</h1>')
    // res.end() 

    fs.readFile('./views/index.html', (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
            res.write(data)
            res.end()   
        }
    })
})

server.listen(3000,'localhost',()=>{
    console.log('3000 portu dinleniyor');
})
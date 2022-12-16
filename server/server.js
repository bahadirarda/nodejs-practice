const http = require('http')
const fs = require('fs')
const _ = require('../npm/node_modules/lodash')


const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);
    //req browserdan gelen bilgileri tutan bir nesne

    res.setHeader('Content-Type', 'text/html')

    // res.write('<head><title>Node.js learning</title></head>')
    // res.write('<h1>Hello world</h1>')
    // res.end() 

    let path = './views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/about')
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path , (err, data)=>{
        if(err){
            console.log(err);
            res.end()
        }
        else{
            // res.write(data) 
            res.end(data)   
        }
    })
}) 

server.listen(3000,'localhost',()=>{
    console.log('3000 portu dinleniyor...');
})




//Lodash area

let nums = [25,36,45,89]

_.each(nums,(val, keys) =>{
    console.log(keys);
})

let randomNum = _.random(0,20)
console.log(randomNum);

let greeting = _.once(() =>
{
    console.log('hello there!');
})

greeting()
greeting()
// let os = require('os')
// console.log(os.platform(),os.homedir());

let fs = require('fs')
// fs.readFile('./docs/text.txt','UTF-8', (err, data) =>
// {
//     if(err) throw err
//     console.log(data);
// });

// fs.writeFile('./docs/text2.txt', 'merhaba, tekrar',(err)=>{
//     if(err) throw err
//     console.log('yazma basarili');
// })

//mevcutluk kontrol işlemi
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err) throw err
        console.log('klasör oluşturuldu');
    })
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err) throw err
        console.log('klasör silindi.');
    })
}

fs.unlink('./docs/text2.txt', (err)=>{
    if(err) throw err
    console.log('dosyalar silindi');
}
)




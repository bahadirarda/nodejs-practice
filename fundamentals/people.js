let names = ['ahmet', 'ayşe', 'bahadir', 'arda']
let ages = [45,22,26,35]

// console.log(names);

let greetings = (name) => {
    return `merhaba, ${name}`
}


// exports.names = names
// exports.ages = ages

module.exports = {
    isim: names,
    yas: ages,
    selamlar: greetings
}
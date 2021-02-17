const fetch = require('node-fetch');
var randomize = require('randomatic');
var random = require('random-name');
const readline = require("readline-sync");

const functionReg = (email, username) => new Promise((resolve, reject) => {
    const bodys = {
        email: email,
        password: "Berak321#",
        pin_code: randomize('0', 6),
        nickname: username,
        lang_code: "en",
        fbuid: randomize('Aa0', 28)
    }
   
       fetch('https://appapi.handypick.io/user/add', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 133,
            'Host': 'appapi.handypick.io',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.14.3'
        }
       })
       .then(res => res.json())
       .then(result => {
           resolve(result);
       })
       .catch(err => reject(err))
});

//40GSMF

const functionReff = (email, reff) => new Promise((resolve, reject) => {
    const bodys = {
        receiver_email: email,
        code: reff,
        deviceID: randomize('a0', 16)
     } 
   
       fetch('https://appapi.handypick.io/user/confirm-invite-code', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 133,
            'Host': 'appapi.handypick.io',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip',
            'User-Agent': 'okhttp/3.14.3'
        }
       })
       .then(res => res.json())
       .then(result => {
           resolve(result);
       })
       .catch(err => reject(err))
   });
   
(async () => {
    const reff = readline.question('[?] Kode reff: ')
    const jumlah = readline.question('[?] Jumlah reff: ')
    console.log("")
    for (var i = 0; i < jumlah; i++){
        try {
            const name = random.first()
            const rand = randomize('0', 5)
            const email = `${name}${rand}@gmail.com`
            const username = `${name}${rand}`
            const regist = await functionReg(email, username)
            if(regist.result != ''){
                console.log('[+] Regist Success !')
                const getReff = await functionReff(email, reff)
                if(getReff.result = 1){
                    console.log('[+] Input Reff Success !\n')
                } else {
                    console.log('[!] Input Reff Failed !\n')
                }
            } else {
                console.log('[!] Regist Failed !\n')
            }
        } catch (e) {
            console.log(e)
   }
}
})()
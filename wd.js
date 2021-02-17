const fetch = require('node-fetch');
var randomize = require('randomatic');
var random = require('random-name');
const readline = require("readline-sync");

const functionLogin = (email, password) => new Promise((resolve, reject) => {
    const bodys = {
        email: email,
        password: password,
        deviceID: randomize('a0', 16)
    }
   
       fetch('https://appapi.handypick.io/user/login', { 
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

const functionWd = (userId, eth, jumlahWd, pin) => new Promise((resolve, reject) => {
    const bodys = {
        user_id: userId,
        receiver_address: eth,
        amount: jumlahWd,
        pin_code: pin
    }
   
       fetch('https://appapi.handypick.io/user/remit-token', { 
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
    try {
        const email = readline.question('[?] Email: ')
        const password = readline.question('[?] Password: ')
        const login = await functionLogin(email, password)
        var userId = login.result.id
        var pin = login.result.pin_code
        var uname = login.result.nickname
        var totalHandi = login.result.handies
        if(login.result != 0){
            console.log('[+] Login Success !')
            console.log(`[+] Hi, ${uname}\n[+] Your Handies Token: ${totalHandi}\n`)
            const jumlahWd = readline.question('[?] Amount for withdrawl: ')
            const eth = readline.question('[?] ETH Wallet: ')
            console.log("")
            const wd = await functionWd(userId, eth, jumlahWd, pin)
            if(wd.result = 1){
                console.log('[+] Withdrawl Success !')
            } else {
                console.log('[+] Withdrawl Failed !')
            }
        } else {
            console.log(`[!] ${login.message_en} !`)
        }
    } catch (e) {
        console.log(e)
}
})()
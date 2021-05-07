const fetch = require('node-fetch');
var randomize = require('randomatic');
var random = require('random-name');
const readline = require("readline-sync");

// const functionReg = (email) => new Promise((resolve, reject) => {
//     const bodys = {
//         "email":email,"password":"password"
//     }
   
//        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBXSIWjV-lV1XXpc0k7wVvLctWuFO7YQGc', { 
//         method: 'POST', 
//         body: JSON.stringify(bodys),
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Android-Package': 'io.handypick.app',
//             'X-Android-Cert': '703E81D84AC74CEAA6CE3F0BF31964D2045904E6',
//             'Accept-Language': 'en-US',
//             'X-Client-Version': 'Android/Fallback/X20000002/FirebaseCore-Android',
//             'Content-Length': 54,
//             'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G935FD Build/N2G48H)',
//             'Host': 'www.googleapis.com',
//             'Connection': 'Keep-Alive',
//             'Accept-Encoding': 'gzip'
//         }
//        })
//        .then(res => res.json())
//        .then(result => {
//            resolve(result);
//        })
//        .catch(err => reject(err))
// });


// const functionSendLink = (idToken) => new Promise((resolve, reject) => {
//     const bodys = {
//         "requestType":4,"idToken":idToken,"androidInstallApp":false,"canHandleCodeInApp":false
//     }
   
//        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyBXSIWjV-lV1XXpc0k7wVvLctWuFO7YQGc', { 
//         method: 'POST', 
//         body: JSON.stringify(bodys),
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Android-Package': 'io.handypick.app',
//             'X-Android-Cert': '703E81D84AC74CEAA6CE3F0BF31964D2045904E6',
//             'Accept-Language': 'en-US',
//             'X-Client-Version': 'Android/Fallback/X20000002/FirebaseCore-Android',
//             'Content-Length': 54,
//             'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-G935FD Build/N2G48H)',
//             'Host': 'www.googleapis.com',
//             'Connection': 'Keep-Alive',
//             'Accept-Encoding': 'gzip'
//         }
//        })
//        .then(res => res.json())
//        .then(result => {
//            resolve(result);
//        })
//        .catch(err => reject(err))
// });

// const functionGetLink = (nickname) =>
//    new Promise((resolve, reject) => {
//        fetch(`https://generator.email/`, {
//            method: "get",
//            headers: {
//                'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//                'accept-encoding': 'gzip, deflate, br',
//                'accept-language': 'en-US,en;q=0.9',
//                'cookie': `_ga=GA1.2.1434039633.1579610017; _gid=GA1.2.374838364.1579610017; _gat=1; surl=relerisce.com%2F${nickname}`,
//                'sec-fetch-mode': 'navigate',
//                'sec-fetch-site': 'same-origin',
//                'upgrade-insecure-requests': 1,
//                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36'
//            }
//        })
//        .then(res => res.text())
//             .then(text => {
//                 const $ = cheerio.load(text);
//                 const src = $("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > p:nth-child(3) > a").attr('href')
//                 resolve(src);
//             })
//             .catch(err => reject(err));
// });

// const functionVerif = (oobCode) => new Promise((resolve, reject) => {
//     const bodys = {
//         "oobCode":oobCode
//     }
   
//        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=AIzaSyCNkVv-oaONZgOTohBfMZv4opyzupxV3u4', { 
//         method: 'POST', 
//         body: JSON.stringify(bodys),
//         headers: {
//             'Host': 'www.googleapis.com',
//             'X-Client-Version': 'Chrome/JsCore/3.7.5/FirebaseCore-web',
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
//             'Content-Type': 'application/json',
//             'Accept': '*/*',
//             'Origin': 'https://handy-6e338.firebaseapp.com',
//             'X-Client-Data': 'CJG2yQEIpLbJAQjEtskBCKmdygEI+MfKAQjknMsBCKidywEIoKDLAQjc8ssB',
//             'Referer': 'https://handy-6e338.firebaseapp.com/',
//             'Accept-Encoding': 'gzip, deflate, br',
//             'Accept-Language': 'en-US,en;q=0.9,id;q=0.8,zh;q=0.7,ko;q=0.6,ja;q=0.5,zh-CN;q=0.4'
//         }
//        })
//        .then(res => res.json())
//        .then(result => {
//            resolve(result);
//        })
//        .catch(err => reject(err))
// });

const functionAdd = (email, nickname, device) => new Promise((resolve, reject) => {
    const bodys = {
        "email":email,
        "phone":`+62812${randomize('0', 8)}`,
        "isPhone":true,
        "password":"Kmaway87aaa@",
        "pin_code":randomize('0', 6),
        "nickname":nickname,
        "lang_code":"en",
        "fbuid":'49n4vWmHB1be4IhwuskXFZ8jRkq2',
        "deviceID":device
    }
   
       fetch('https://appapi.handypick.io/user/add-with-device-id', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 226,
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

const functionReff = (email, device, token, codreff) => new Promise((resolve, reject) => {
    const bodys = {
        "receiver_email":email,"code":codreff,"deviceID":device
    }
   
       fetch('https://appapi.handypick.io/user/confirm-invite-code', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 226,
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

const functionLogin = (email, device) => new Promise((resolve, reject) => {
    const bodys = {
        "email":email,"password":"Kmaway87aaa@","deviceID":device
    }
   
       fetch('https://appapi.handypick.io/user/login', { 
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'accept': 'application/json, text/plain, */*',
            'authorization': `Bearer null`,
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': 226,
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
    const codreff = readline.question('[?] Kode reff: ')
    const jumlah = readline.question('[?] Jumlah reff: ')
    console.log("")
    for (var i = 0; i < jumlah; i++){
        try {
            // const name = random.first()
            // const rand = randomize('0', 5)
            // const email = `${name}${rand}@relerisce.com`
            // console.log(`[+] EMail: ${email}`)
            // const regist = await functionReg(email)
            // if (regist.hasOwnProperty('idToken')){
            //     const idToken = regist.idToken
            //     const sendLink = await functionSendLink(idToken)
            //     if(sendLink.hasOwnProperty('email')){
            //         console.log('[+] Link verifikasi berhasil dikirim')
            //         do {
            //             var getLink = await functionGetLink(`${name}${rand}`)
            //             console.log('[!] Mencoba mendapatkan link..')
            //         } while(getLink == undefined)
            //         const oobCode = getLink.split('oobCode=')[1].split('&apiKey')[0]
            //         const verif = await functionVerif(oobCode)
                    
            //     } else {
            //         console.log(`[!] Link verifikasi gagal dikirim !`)
            //     }
            // } else {
            //     console.log(`[!] Gagal regist !`)
            // }
            const device = randomize('a0', 16)
            const name = random.first()
            const rand = randomize('0', 5)
            const email = `${name}${rand}@gmail.com`
            console.log(`[+] Email: ${email}`)
            const nickname = `${name}${rand}`
            const add = await functionAdd(email, nickname, device)
            if(add.hasOwnProperty('user')){
                console.log('[+] Berhasil regist')
                const log = await functionLogin(email, device)
                const token = log.auth_token
                const addReff = await functionReff(email, device, token, codreff)
                if(addReff.message == 'success'){
                    console.log('[+] Berhasil reff\n')
                } else {
                    console.log('[!] Gagal reff\n')
                }
            } else {
                console.log('[!] Gagal regist\n')
            }
        } catch (e) {
            console.log(e)
   }
}
})()

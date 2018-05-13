const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio'); 
// const https = require('https');

async function GrepNovel() {
    const result = await new Promise((resolve, reject) => {
        request.get('https://m.miaobige.com/novel/746/543840/', {
            encoding: null
        }, (err, res, body) => {
            if (err) reject(err);
            var response =  iconv.decode(body, 'GBK');
            const $ = cheerio.load(response);
            const novel = {
                content: $('#content').html(),
                title: $('.title > h1').text()
            };
            resolve(novel);
        })
        // let content = '';
        // https.get('https://www.miaobige.com/read/746/543840.html', (res) => {
        //     res.setEncoding('binary');
        //     res.on('data', (data) => {
        //         content += data;
        //     });
        //     res.on('end', () => {
        //         // var response =  iconv.decode(content, 'gbk');
        //         // console.log(response)
        //         // const $ = cheerio.load(response);
        //         // resolve($('#content').html())
        //         let $ = cheerio.load(res);
        //         let buf = new Buffer(content, 'binary'); //这一步不可省略
        //         let str = '';
        //         if(/gbk/i.test($('meta[charset]').attr('charset'))){
        //             console.log('>>>')
        //             str = iconv.decode(buf, 'GBK'); //将GBK编码的字符转换成utf8的
        //         }else{//将utf8编码下的binary字符还原为utf8
        //             str = iconv.decode(buf, 'UTF8');
        //         }
        //
        //         console.log(str)
        //         resolve(str)
        //     })
        // }).on('error', (err) => {
        //     reject(err)
        // })
    });
    return result;
}

module.exports = GrepNovel;
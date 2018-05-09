const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio'); 

async function GrepNovel() {
    const res = await new Promise((resolve, reject) => {
        request.get('https://m.miaobige.com/novel/746/543840/', {
            encoding: null
        }, (err, res, body) => {
            if (err) reject(err);
            var response =  iconv.decode(body, 'GBK');
            // const $ = cheerio.load(response);
            resolve((response.split('<div id="content">')[1]).split('<div class="content_ad" id="ad_950">')[0]);
        })
    })
    return res;
}

module.exports = GrepNovel;
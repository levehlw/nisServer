const utility = require('utility')

//密匙
const SECRET_KEY = 'levea_#1234'

//md5 加密

function md5(content){
    return utility.md5(content)
}
//加密函数
function genPassword(password){
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}
module.exports = { genPassword }
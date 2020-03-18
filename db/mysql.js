const mysql = require('mysql')
// 创建连接
const con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        port:'3306',
        database:'mynis' 
    })

//开始连接
con.connect()

//执行SQL语句
const exec =  function (sql){
    const promise = new Promise((resolve,reject) =>{
        con.query(sql,(err,result) => {
            if(err){
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}
module.exports = {
    exec,
    escape:mysql.escape
}


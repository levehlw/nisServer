const { genPassword } = require('../utils/cryp')
const { exec,escape } = require('../db/mysql')

const login  = (username, pwd) => {
    escape(username)
    pwd = genPassword(pwd)
    escape(pwd)
    const sql = `select username, role from users where username = '${username}' and pwd = '${pwd}'`
    return exec(sql).then(rows=>{
        return rows[0]
    })
}
const register = (userInfo) => {
    let { username, pwd, role } = userInfo
    escape(username)
    pwd = genPassword(pwd)
    escape(pwd)
    escape(role)
    const sql = `insert into users (username,pwd,role) values('${username}','${pwd}','${role}')`
    return exec(sql).then(
        rows => {
            return rows
        }
    ).catch(error => {
        return error
    })
}

module.exports = { login, register }
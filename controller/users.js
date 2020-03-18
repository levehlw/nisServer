const { genPassword } = require('../utils/cryp')
const { exec,escape } = require('../db/mysql')

const login  = (username, password) => {
    escape(username)
    password = genPassword(password)
    escape(password)
    const sql = `select username, role from users where username = '${username}' and pwd = '${password}'`
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}
const register = (userInfo) => {
    let { username, password, role } = userInfo
    escape(username)
    password = genPassword(password)
    escape(password)
    escape(role)
    const sql = `insert into users (username,pwd,role) values('${username}','${password}','${role}')`
    return exec(sql).then(
        rows => {
            return rows
        }
    ).catch(error => {
        return error
    })
}

module.exports = { login, register }
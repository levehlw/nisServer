const { exec,escape } = require('../db/mysql')
// 插入信息
const newInfo = userInfo => {
    let { lid, gender, birth, post, phone, email } = userInfo
    gender = escape(gender)
    post = escape(post)
    lid = escape(lid)
    birth = escape(birth)
    phone = escape(phone)
    email = escape(email)
    const sql  = `INSERT INTO userinfo (lid, gender, birth, post, phone, email)
    VALUES(${lid}, ${gender}, ${birth}, ${post}, ${phone}, ${email})`
    return exec(sql).then(
    result => {
        result.status = 200
        return result
    }).catch(err=>{
        err.status = 500
        return err
    })
}
// 删除信息
const delInfo = (id) => {
    const sql = `DELETE FROM userinfo WHERE id = ${id}`
    return exec(sql).then(
        result => {
            result.status = 200
            return result
        }
    ).catch( err => {
        err.status = 500
        return err
    })
}

const updateInfo = (userInfo) => {
    let { lid, gender, birth, post, phone, email } = userInfo
    lid = escape(lid)
    let sql = `UPDATE userinfo SET `
    let count = 0
    if(gender){
        gender = escape(gender)
        sql += `gender = ${gender} ,`
        count++
    }
    if(birth){
        birth = escape(birth)
        sql += `birth = ${birth} ,`
        count++
    }
    if(post){
        post = escape(post)
        sql += `post = ${post} ,`
        count++
    }
    if(phone){
        phone = escape(phone)
        sql += `phone = ${phone} ,`
    }
    if(email){
        email = escape(email)
        sql += `email = ${email}, `
        count++
    }
    if(count > 0){
        sql += `lid = ${lid} WHERE lid = ${lid}`
    }
    else{
        sql += `WHERE lid = ${lid}`
    }
    return exec(sql).then(
        result => {
            result.status = 200
            return result
        }).catch(err=>{
            err.status = 500
            return err
    }) 
}
// 查询信息
const queryInfo = (lid) => {
    const sql = `SELECT * FROM userinfo WHERE lid = ${lid}`
    return exec(sql).then(
        rows => {
            rows[0].status = 200
            return rows[0]
        }
    ).catch( err => {
        err.status = 500
        return err
    })
}

module.exports = { newInfo, delInfo, updateInfo, queryInfo }
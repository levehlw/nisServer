const { exec,escape } = require('../db/mysql')

// 查询医嘱信息
const queryOrder = (id) => {
    id = escape(id)
    const sql  = `SELECT * FROM orders WHERE id = ${id}`
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

// 插入医嘱
const insertOrder = () => {
    const sql = `INSERT INTO orders (order_name, create_time, confirm_time, start_time, end_time, perform_time, order_doctor, stop_doctor, create_per, modifer 
        ,confirm_per, stop_per, status, supply_type, drug_serial_id, drug_name, drug_specification, usage_unit, usage, charge_amount, instruction) VALUES(${order_name}, ${create_time}, ${confirm_time}, ${start_time}, ${end_time}, ${perform_time}, ${order_doctor}, ${stop_doctor}, ${create_per}, ${modifer}, 
        ${confirm_per}, ${stop_per}, ${order_status}, ${supply_type}, ${drug_serial_id}, ${drug_name}, ${drug_specification}, ${usage_unit}, ${usage}, ${charge_amount}, ${instruction} )`
        return exec(sql).then(
            result => {
                result.status = 200
                return result
            }).catch(err=>{
                err.status = 500
                return err
        })
}

// 修改医嘱状态
const updateOrder = () => {

}

// 删除医嘱
const delOrder = (id) => {
    id = escape(id)
    const sql = `DELETE FROM orders WHERE id = ${id}`
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

module.exports = { queryOrder }
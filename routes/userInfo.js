const express = require('express');
const router = express.Router();

const { newInfo, delInfo, updateInfo, queryInfo } = require('../controller/userInfo')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 插入用户信息
router.post('/new', function(req, res, next){
    const userInfo = req.body
    const result = newInfo(userInfo)
    return result.then( data => {
        if(data.status == 200){
            res.json(new SuccessModel(data))
        }
        else{
            res.json(new ErrorModel("插入用户信息失败" + data))
        }
    })
})

// 删除用户信息
router.get('/del', function(req, res, next) {
    const id = req.query.id
    const result = delInfo(id)
    return result.then( data => {
        if(data.status == 200){
            res.json(new SuccessModel(data))
        }
        else{
            res.json(new ErrorModel("删除失败" + data))
        }
    })
})
// 查询用户信息
router.post('/query', function(req, res, next) {
    const { lid } = req.body
    const result = queryInfo(lid)
    return result.then( data => {
        if(data.status == 200){
            res.json(new SuccessModel(data))
        }
        else{
            res.json(new ErrorModel("查询出错 " + data))
        }
    })
})

// 修改用户信息
router.post('/update', function(req, res, next) {
    const userInfo = req.body
    const result = updateInfo(userInfo)
    return result.then( data => {
        if(data.status == 200){
            res.json(new SuccessModel(data))
        }
        else{
            res.json(new ErrorModel("修改用户信息失败 " + data))
        }
    })
})

module.exports = router
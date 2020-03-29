const express = require('express');
const router = express.Router();

const { queryOrder, updateOrder, insertOrder, delOrder } = require('../controller/orders')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/query', function(req, res, next){
    const id = req.query.id
    const result = queryOrder(id)
    return result.then( data => {
        if(data.status == 200){
            res.json(new SuccessModel(data))
        }
        else{
            res.json(new ErrorModel("查询失败" + data))
        }
    })
})

module.exports = router
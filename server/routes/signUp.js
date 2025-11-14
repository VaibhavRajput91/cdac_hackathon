const express = require('express');

const pool = require('../utils/dbuser');

const router = express.Router();

router.put('/signUp', (req, res) => {

    const { first_name, last_name, email, mobile, birth, password } = req.body
    const sql = `INSERT INTO users(first_name, last_name, email, mobile, birth, password ) values (?, ? ,? ,? ,? ,? )`
    pool.query(sql, [first_name, last_name, email, mobile, birth, password], (error, data) => {
        if (data)
            res.send({ status: 'success', data })
        else
            res.send({ status: 'error', error })
    })
})

module.exports = router
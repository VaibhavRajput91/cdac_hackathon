const express = require('express');
const bcrypt = require('bcrypt');

const pool = require('../utils/dbuser');

const saltRounds = 10;

const router = express.Router();

router.put('/signUp', async (req, res) => {

    const { first_name, last_name, email, mobile, birth, password } = req.body
    const sql = `INSERT INTO users(first_name, last_name, email, mobile, birth, password ) values (?, ? ,? ,? ,? ,? )`
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds)
        pool.query(sql, [first_name, last_name, email, mobile, birth, hashPassword], (error, data) => {
            if (data)
                res.send({ status: 'success', data })
            else
                res.send({ status: 'error', error })
        })
    }
    catch (error) {
        res.send({ status: 'error', error })
    }
})

module.exports = router
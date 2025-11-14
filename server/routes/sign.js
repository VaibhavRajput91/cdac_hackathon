const express = require('express');

const pool = require('../utils/dbuser')

const signRouter = express.Router();

signRouter.post('/signUp', (req, res) => {
    const { first_name, last_name, email, mobile, birth, password } = req.body
    const sql = `INSERT INTO users(first_name, last_name, email, mobile, birth, password) values (?, ? ,? ,? ,? ,? )`
    pool.query(sql, [first_name, last_name, email, mobile, birth, password], (error, data) => {
        if (data)
            res.send({ status: 'success', data })
        else
            res.send({ status: 'error', error })
    })
})

signRouter.post('/signIn', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? and password = ?`
    pool.query(sql, [email, password], (error, data) => {
        if (data != '') {
            const user = data[0]
            const userData = {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            }
            res.send({ status: 'success', data: userData })
        }
        else {
            res.send({ status: 'error', error: 'Invalid email or Password' })
        }

    })
})

module.exports = signRouter
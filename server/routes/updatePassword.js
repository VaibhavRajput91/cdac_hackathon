const express = require('express')

const pool = require('../utils/dbuser')

const updatePasswordRouter = express.Router();

updatePasswordRouter.post('/updatePassword', (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    const sql = `UPDATE users SET password= ? WHERE email= ? AND password= ? `
    pool.query(sql, [newPassword, email, oldPassword], (error, data) => {
        if (data) {
            res.send({ status: 'success', data })
        }
        else {
            res.send({ status: 'error', error })
        }
    })
})


module.exports = updatePasswordRouter
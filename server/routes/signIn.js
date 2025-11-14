const express = require('express')

const pool = require('../utils/dbuser')

const router = express.Router()
router.put('/signIn', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ? and password = ?`
    pool.query(sql, [email, password],(error, data) => {
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

module.exports = router
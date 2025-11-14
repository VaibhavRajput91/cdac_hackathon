const express = require('express')
const bcrypt = require('bcrypt');

const pool = require('../utils/dbuser')

const router = express.Router()
router.put('/signIn', (req, res) => {
    const { email, password } = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql, [email], async (error, data) => {
        if (data != '') {
            try {
                const user = data[0]
                const result = await bcrypt.compare(password, user.password)
                if (result) {
                    const userData = {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }
                    res.send({ status: 'success', data: userData })
                }
                else {
                    res.send({ status: 'error', error: 'Invalid Password' })
                }
            }
            catch (error) {
                res.send({ status: 'error', error })
            }
        }
        else {
            res.send({ status: 'error', error: 'Invalid email' })
        }

    })
})

module.exports = router
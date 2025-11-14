const express = require('express')
const cors = require('cors')

const signRouter = require('./routes/sign')
const updatePasswordRouter = require('./routes/updatePassword')

const app = express()

app.use(express.json());
app.use(cors())

app.use('/', signRouter);
app.use('/user', updatePasswordRouter);

app.listen(4000, 'localhost', () => {
    console.log("Express Server is live now...")
})



const express = require('express')

const signUpRouter = require('./routes/signUp')
const signIpRouter = require('./routes/signIn')

const app = express()

app.use(express.json());
app.use('/', signUpRouter);
app.use('/', signIpRouter);

app.listen(4100, 'localhost', () => {
    console.log("Express Server is live now...")
})



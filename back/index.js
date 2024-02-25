import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './router.js'


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)

app.listen(3000, () => {
    console.log("Server is listenning on port 3000")
})

import express from 'express'
import {} from 'dotenv/config' // gives us access to processdotenv
import routes from './routes/routes.js'

const app = express()

// LOAD ROUTES INTO OUR MAIN FILE
app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

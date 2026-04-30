import { app } from "./app.js";
import dotenv from 'dotenv'


dotenv.config()

app.listen(process.env.SERVER_PORT, () => {
    console.log('SERVER HTTP RUNNING')
})
import express from "express"
import cors from "cors"
import { data } from './data.js';



const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.json(getCat())
})

async function getCat() {
    try {
        const res = await fetch("https://cataas.com/cats");
        const data = await res.json();
        return Promise.resolve(data);
    }
    catch (error) {
        return Promise.reject(new Error('An error occurred'));
    }

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
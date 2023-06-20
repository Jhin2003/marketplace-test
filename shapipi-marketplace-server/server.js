import express from "express"
import cors from "cors"
import path from "path"
import fs from "fs"
import sqlite3 from "sqlite3"


const app = express()
const port = 3001
const __dirname = path.resolve(path.dirname(''));

app.use(cors());
app.use(express.static('public'))

const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5307e0ec30mshad341da7c4f4774p1d7e1djsn336fe3be5590',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}






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
import express from 'express'

// looks for HTML files, sends them back as a response
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'


const app = express()
const PORT = process.env.PORT || 5000

console.log("remember, we will be watching")

// gets the path to the URL
const __filename = fileURLToPath(import.meta.url)

// get the directory name
const __dirname = dirname(__filename)

// serving the HTML file from the public directory

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


// waiter waiter! more GIRLS KISSING please!!!
// middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

/** const express = require ('express');
const app = express();
const PORT = 3000;

const data = {
    name: 'Lexi'
}

// app.use(express.static(__dirname));

app.get('/', (req, res) =>{
    console.log ("Endpoint reached", req.method)
    res.sendStatus(200)
    res.send(`<body>${JSON.stringify(data)}
            <p></p>
        </body>`)
})

app.get('/dashboard', (req, res) =>{
    console.log("We hit the dashboard input")
    res.send('hi :3')
}) 

app.get('/api/data', (req, res)=>{
    console.log('This is for the data')
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`lesbian server running at http://localhost:${PORT}`)
}); **/
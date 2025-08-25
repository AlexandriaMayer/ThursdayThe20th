const express = require ('express');
const app = express();
const PORT = 3000;

// app.use(express.static(__dirname));

app.get('/', (req, res) =>{
    console.log ("Endpoint reached", req.method)
    res.sendStatus(200)
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
});
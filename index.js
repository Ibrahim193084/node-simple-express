const express = require('express')
const app = express()
const cors= require('cors')
app.use(cors())
app.use(express.json());
const port = 5000
const users = [
    { id: '1', name: 'sakib khan', adress: 'dhaka' },
    { id: '2', name: 'rakib khan', adress: 'dhaka' },
    { id: '3', name: 'dakib khan', adress: 'dhaka' },
    { id: '4', name: 'fakib khan', adress: 'dhaka' },
    { id: '5', name: 'nakib khan', adress: 'dhaka' }
]

app.get('/', (req, res) => {
    res.send('Hello from my first node')
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    res.send(users)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post',req.body)
    // res.send('inside post')
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})


app.listen(port, () => {
    console.log('listening to port', port)
})
const express = require('express')
const app = express()
const connectToDb = require('./config/mongoose')
connectToDb()
const userModel = require('./Models/users')

app.get('/', (req, res) => {
    res.send('hello gyewqe')
})


app.get('/create-user', async (req, res, next) => {
    const user = await userModel.create({
        username:'a',
        email:'a@a.com'
    })
    res.send(user)
})

app.get('/get-user/:username', async (req, res, next) => {
    const user = await userModel.findOne({
        username: req.params.username
    })
    


app.get('/create-post/:username', async (res, res, next) => {
    username: req.params.username
})


user.posts.push({
    content: "https://plus.unsplash.com/premium_photo-1685736630644-488e8146a3dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    caption: "beatiful image"

})

await user.save()

res.send(user);

})



app.listen(3000, () => {
    console.log('server is running on port 3000');
    
})
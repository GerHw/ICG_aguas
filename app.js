const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    let home = path.resolve(__dirname, './views/users/home.ejs')
    // res.sendFile('./views/home.html')
    res.render(home)
})

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('server on')
})
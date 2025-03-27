const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/create', (req, res) => {
    console.log('Create page');
    res.render('form', {})
});

app.post('/user', (req, res) => {
    console.log('User post');

    let data = req.body;
    console.log('Data: ', data);

    let username = data.username;
    let email = data.email;

    res.render('user', {data1: username, data2: email});
});

app.get('/users', (req, res) => {
    console.log('Users page');

    const users = [{
        "username": "dennis", "email": "ddd@xxx.gr"
    },
    {
        "username": "alice", "email": "aaa@xxx.gr"
    }];
    res.render('users', {users});
});

app.listen(port, () => {    
    console.log(`Server running on port ${port}`);
});
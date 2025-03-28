const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('files'));

const logger = (req, res, next) => {
    let url = req.url;
    console.log(logger, req.body);
    let time = new Date();
    console.log(`Request received at ${time} for ${url}`);
    
    next();
}


app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('This is the Home page');
    });

app.post('/user', logger, (req, res) => {
    let data = req.body;
    let username = data.username;
    let email = data.email;
    console.log('Data: ', data);
    res.send('Data received');
    

    console.log(data);
    res.send(`User data ${username}, {email}`);
});

app.post('/userForm', (req, res) => {
    let data = req.body;
    console.log('Data: ', data);
    res.send('UserForm page');
});

app.use('/user1', (req, res) => {
    console.log('User1');
    res.send('This is the User1 page');
});

app.use('/user2', (req, res) => {
    console.log('User2');
    res.send('This is the User2 page');
});


app.use('/user2/hello', (req, res) => {
    console.log('User2');
    res.send('This is the User2 page hello');
});

app.listen(port, () => {
    console.log(`Server is up, listening at http://localhost:${port}`);
});
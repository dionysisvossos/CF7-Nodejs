const User = require('../models/user.model.js');

exports.findAll = async(req, res) => {
    console.log('Find All users from collection users');
    try {
        const result = await User.find();
        res.json ({status: true, data: result});
    } catch (err) {
        console.log('Problem in reading users', err.message);
        res.json({status: false, data: err.message});
    }
}

exports.findOne = async(req, res) => {
    console.log('Find user with specific username');
    let username = req.params.username;
    try {
        const result = await User.findOne({username: username});
        res.json ({status: true, data: result});
    } catch (err) {
        console.log('Problem in finding user', err.message);
        res.json({status: false, data: err.message});
    }
}

exports.create = async(req, res) => {
    console.log('Create user in collection users');
    let data = req.body;
    
    const newUser = new User({
        username: data.username,
        password: data.password,
        name: data.name,
        surname: data.surname,
        email: data.email,
        address: {
            area: data.address.area,
            road: data.address.road,
        }
    });

    try {
        const result = await newUser.save();
        res.json ({status: true, data: result});
    } catch (err) {
        console.log('Problem in creating user', err.message);
        res.json({status: false, data: err.message});
    }
}
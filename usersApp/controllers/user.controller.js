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
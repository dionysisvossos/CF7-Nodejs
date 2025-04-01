const jwt = require('jsonwebtoken');

function generateAccessToken(user) {

    console.log('Auth service', user);
    const payload = {
        username: user.username,
        email: user.email,
        roles: user.roles
    };

    const secret = process.env.TOKEN_SECRET;
    const options = {
        expiresIn: '3600s'
    };

    return jwt.sign(payload, secret, options);
    
}

module.exports = {
    generateAccessToken
}
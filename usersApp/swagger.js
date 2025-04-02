const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');

exports.options = {
    "components": {
        "schemas": {
            User: m2s(User)
        }
    },
    "openapi": "3.1.0",
    "info": {
        "title": "Users and Products CRUD API",
        "version": "1.0.0",
        "description": "An application for creating users and choosing products",
        "contact": {
            "name": "API Support",
            "url": "https://aueb.gr/support",
            "email": "support@example.com"
        }
    }
}
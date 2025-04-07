const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');

exports.options = {
    "components": {
        "schemas": {
            User: m2s(User)
        },
        "securitySchemes": {
            "BearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "format": "JWT"
            }
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
    },
    "servers": [
        {
            "url": "http://localhost:3000",
            "description": "Development server"
        },
        {
            "url": "https://api.example.com",
            "description": "Production server"
        }
    ],
    "tags": [
        {
            "name": "Users",
            "description": "Endpoints for users"
        },
        {
            "name": "Users and Products",
            "description": "Endpoints for users and products"
        },
        {
            "name": "Auth",
            "description": "Endpoints for Authentication"
        }
    ],
    "paths": {
        "/api/users": {
            "get": {
            "tags": ["Users"],
            "description": "Returns a list of all users",
                "responses": {
                    "200": {
                        "description": "List of all users",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/User"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/users/{username}": {
            "get": {
                "tags": ["Users"],
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "required": true,
                        "description": "Username of the user to find",
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "description": "Returns a single user by username",
                "responses": {
                    "200": {
                        "description": "User found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "User not found"
                    }
                }
            }
        },
        "/api/auth/login": {
            "post": {
                "tags": ["Auth"],
                "description": "Login user",
                "requestBody": {
                    "description": "User login credentials with jwt token",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string"
                                    },
                                    "password": {
                                        "type": "string"
                                    }
                                },
                                "required": ["username", "password"]
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "User logged in successfully/Token Returned",
                        "content": {
                            "application/json": {
                                "schema": {
                                    type: 'object',
                                    properties: {
                                        token: { type: 'string' },
                                        user: { $ref: '#/components/schemas/User' }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Invalid username or password"
                    }
                }
            }
        },
    }
}

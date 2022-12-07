module.exports = {
    api: {
        port: process.env.API_PORT || 3001,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mongodb: {
        url: process.env.MONGO_URL || "mongodb://admin:secure@localhost:27018/?authMechanism=DEFAULT"
    },
    redis: {
        port: process.env.REDIS_PORT || 6379,
        url: process.env.REDIS_URL || "redis://localhost:6379"
    }
    
}
const express = require("express");

const server = express();

const accountsRouter = require('./accounts/accounts-router');

const errorHandling = (err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
        message: err.message,
})
}

const notFound = (req, res, next) => {
    res.status(404).json({
        message: 'Not found'
})
}

server.use(express.json());
server.use('/api/accounts', accountsRouter)
server.use(errorHandling)
server.use('*', notFound)

module.exports = server;

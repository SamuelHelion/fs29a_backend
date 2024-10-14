const { Sequelize } = require('sequelize')
require('dotenv').config()

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: process.env.HOST || 'localhost',
//     port:  process.env.PORT || '5432',
//     username:  process.env.USERNAME || 'postgres',
//     password: process.env.PASSWORD || '',
//     database: process.env.DATABASE || 'backend'
// })

// const Connection = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port:  '5432',
//     username: 'postgres',
//     password: '1234',
//     database: 'fs29'
// })

const Connection = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cs6pfgjqf0us73e8q1tg-a',
    port:  '5432',
    username: 'fs29_marcio_user',
    password: 'VgbWkqPyLU6fb5s6c4dByKw7Ti2UxYUl',
    database: 'fs29_marcio'
})

module.exports = Connection;
require('module-alias/register')

const express = require("express")
const morgan = require('morgan')
const cors = require('cors');
const app = express()

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());

const routes = require('@routes')

app.use('/', routes)

module.exports = app

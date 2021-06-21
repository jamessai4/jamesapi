const express = require("express");
const path = require("path")
const flash = require('express-flash')
const session = require('express-session');
const passport = require('passport')
const multer = require('multer');
const cors = require('cors')

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
//api v1
const productRoute = require('./router/index.js');
app.use(productRoute);

module.exports = app
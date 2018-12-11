import express from 'express';
import cloudinary from 'cloudinary';
import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
import morgan from 'morgan';
import routes from './routes';

require('./handlers/passport');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(morgan('dev'));

app.use(passport.initialize());
//app.use(passport.session());

app.use("/", routes);


module.exports = app;
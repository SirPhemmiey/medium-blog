// import passport from 'passport';
// import mongoose from 'mongoose';

// const Author = mongoose.Model('Author');
// passport.use(Author.createStrategy());

// passport.serializeUser(Author.serializeUser());
// passport.deserializeUser(Author.deserializeUser());

import passport from 'passport';
import mongoose from 'mongoose';
const Author = mongoose.model('Author');
const LocalStrategy = require('passport-local').Strategy;
import passportJWT from 'passport-jwt';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username, password, cb) {
    return Author.findOne({username, password})
        .then(user => {
            if (!user) {
                return cb(null, false, { message: 'Incorrect username or password'})
            }
            return cb(null, user, { message: 'Logged in sucessfully' });
        })
        .catch(err => cb(err));
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}, function(jwtpayload, cb) {
    return Author.findById(jwtpayload.id)
        .then(user => {
            return cb(null, user);
        })
        .catch(err => {
            return cb(err)
        })
}))
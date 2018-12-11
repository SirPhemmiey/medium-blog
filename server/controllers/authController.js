import mongoose from 'mongoose';
import passport from 'passport';
import jwt from 'jsonwebtoken';


exports.login = passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err || !user) {
        return res.status(400).json({
            message: "Something went wrong",
            user
        })
    }
    res.login(user, { session: false }, err => {
        if (err) {
            res.send(err)
        }

        //generate token
        const token = jwt.sign(user, 'secret');
        return res.json({user, token});
    })(req, res)
});

exports.logout = async (req, res) => {

};

//exports.isLoggedIn =
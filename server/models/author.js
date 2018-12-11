import mongoose from 'mongoose';
import mongooseMongodbErrors from 'mongoose-mongodb-errors';
import passportLocalMongoose from 'passport-local-mongoose';

const author = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        lowerCase: true,
        required: "Please enter a name"
    },
    password: {
        type: String,
        required: "Please enter a password"
    },
    bio: {
        type: String
    },
    photo: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.ObjectId,
        ref: 'post'
    }],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    hearts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'post'
        }
    ]
});

function populate(next) {
    this.populate('post');
    next();
}

author.plugin(passportLocalMongoose);
author.plugin(mongooseMongodbErrors);
export default mongoose.model('Author', author);
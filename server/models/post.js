import mongoose from 'mongoose';
import mongooseMongodbErrors from 'mongoose-mongodb-errors';
import slug from 'slugs';

const post = new mongoose.Schema({
    title: {
        type: String,
        required: "Please enter a title"
    },
    photo: {
        type: String,
       // required: "Please enter a picture"
    },
    slug: String,
    body: {
        type: String,
        trim: true,
        required: "Please supply a body text"
    },
    status: {
        type: String,
        default: 'published'
    },
    tags: [String],
    claps: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'author'
        }
    ],
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'author',
        //required: 'You must supply an author'
    }
});

//define our indexes (for fast retrieval)
post.index({
    username: 'text',
    body: 'text'
});

//define our hooks
post.pre('save', async function(next) {
    //skip if not modified else stop execution
    if (!this.isModified('title')) {
        next();
        return;
    }
    this.slug = slug(this.title);
    //find other slugs that have the same name and add a number to them to avoid conflicts
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i'); //case-insensitive
    const storeWithSlug = await this.constructor.find({slug: slugRegEx});
    if (storeWithSlug.length) {
        this.slug = `${this.slug}-${storeWithSlug.length + 1}`;
    }
    next();
});

post.plugin(mongooseMongodbErrors);
export default mongoose.model('Post', post);
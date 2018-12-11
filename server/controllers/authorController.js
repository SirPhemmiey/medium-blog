import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
const Post = mongoose.model('Post');
const Author = mongoose.model('Author');

exports.profile = async (req, res) => {
    const data = await Author.findById(req.user._id);
    res.json({
        data
    });
};

exports.editProfile = async (req, res) => {
    const data = await Author.findById(req.user._id);
    res.json({
        data
    });
};

exports.allPosts = async (req, res) => {
    const posts = await Post.findOne({
        _id: req.user._id
    });
    res.json({
        posts
    });
};
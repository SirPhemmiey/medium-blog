import mongoose from 'mongoose';
import multer from 'multer';
import jsonwebtoken from 'jsonwebtoken';
const Post = mongoose.model('Post');
const Author = mongoose.model('Author');

exports.home = async (req, res) => {
      const posts = await Post({});
      res.json({posts});
};

exports.createPost = async (req, res) => {
      let { body, title } = req.body;
      const data = {body, title}
      const result = await Post.create(data);
      if (result) {
            res.json({message: 'success'})
      }
      else {
            res.json({message: 'error'})
      }
};

exports.updatePost = async (req, res) => {

};

exports.deletePost = async (req, res) => {

};
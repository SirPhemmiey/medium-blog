import express from 'express';
const router = express.Router();
import authorController from '../controllers/authorController';
import postController from '../controllers/postController';
import authController from '../controllers/authController';
import {catchErrors} from '../handlers/errorHandler';


router.post('/author/login', catchErrors(authController.login));
router.get("/author/logout", authController.logout);

router.get("/author/profile", catchErrors(authorController.profile));
router.put("/author/editProfile", catchErrors(authController.editProfile));

router.post("/post/createPost", catchErrors(postController.createPost));
router.get("/post/posts", catchErrors(postController.home));
router.put("/post/updatePost", catchErrors(postController.updatePost));
router.delete("/post/deletePost", catchErrors(postController.deletePost));

module.exports = router;

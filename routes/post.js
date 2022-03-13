const express = require('express')
const router = require("express").Router();
const postController = require("../controllers/post")
const {GET_ALL_POSTS, GET_POSTS_BY_ID, ADD_POST, UPDATE_DELETE_POST} = require("../constants/routes/path")

router.get(GET_ALL_POSTS,  postController.GetAllPosts );

router.get(GET_POSTS_BY_ID, postController.GetPostByID );

router.post(ADD_POST, postController.addPost);

router.patch(UPDATE_DELETE_POST, postController.updatePost);

router.delete(UPDATE_DELETE_POST, postController.deletePost);


module.exports = router;

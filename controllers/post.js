const Post = require('../models/post')

const GetAllPosts = async (req, res) => {
    Post.find({}).then((posts) => {
        res.send(posts)
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const GetPostByID = async (req, res) => {
    const _id = req.params.id
    Post.findById(_id).then((post) => {
        if (!post) {
            return res.status(404).send
        }
        res.send(post)
    }).catch((err) => {
        res.status(500).send(err);
    })
}

const addPost = (req, res) => {
    const post = new Post(req.body)
    console.log(post);
    console.log(req.body,"req.body");
    post.save().then(() => {
        // res.send(' testing')
        res.send(post)
    }).catch((err) => {
        res.status(400).send(err);
    })
}

const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        console.log(req.body,"updateeeeeeeeeeeeee");
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (err) {
        res.status(400).send(err);
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id)
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    GetAllPosts, 
    GetPostByID,
    addPost,
    updatePost,
    deletePost
}


const dotenv = require("dotenv");
const express = require('express')
require('./db/mongoose')
const Post = require('./models/post')

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config({ path: "./config/config.env" });

app.use(express.json())
app.post('/post', (req, res) => {
    const post = new Post(req.body)
    post.save().then(() => {
        res.send(post)
    }).catch((err) => {
        res.status(400).send(err);
    })
});

app.get('/posts', (req, res) => {
    Post.find({}).then((posts) => {
        res.send(posts)
    }).catch((err) => {
        res.status(500).send(err);
    })
});

app.get('/posts/:id', (req, res) => {
    const _id = req.params.id
    Post.findById(_id).then((post) => {
        if (!post) {
            return res.status(404).send
        }
        res.send(post)
    }).catch((err) => {
        res.status(500).send(err);
    })
});



app.patch('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (err) {
        res.status(400).send(err);
    }
});



app.delete('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id)
        if (!post) {
            return res.status(404).send()
        }
        res.send(post)
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
});

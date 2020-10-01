const express = require('express');
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();

// middleware to allow data access (CORS)
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    next();
});

// make uploads a static folder so that the images can be used publically
app.use('/uploads', express.static('uploads'));

app.get("/api/posts", (req, res) => {

    // const test = {
    //     testing: "testing"
    // }
    // postsData.add(test);
    res.status(200).send(postsData.get());
})

app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualPosts(postId);
    if(foundPost){
        res.status(200).send(foundPost);
    }else{
        res.status(404).send('Not found');
    }
    
})

app.listen(3000, () => console.log("Listening to localhost!"));
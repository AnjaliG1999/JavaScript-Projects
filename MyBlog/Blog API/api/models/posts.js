const PATH = "./data.json"
const fs = require('fs');

class Post {
    get() {
        // get posts
        return this.readData();
    }

    getIndividualPosts(postId) {
        // get one blog post
        const posts = this.readData();
        const findPost = posts.find(post => post.id == postId);
        return findPost;
    }

    add(newPost) {
        // add new post
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post; 
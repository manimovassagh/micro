import axios from 'axios';
import express from 'express';
export const postRouter = express.Router();



postRouter.get('/post', (_req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data).then(posts => {
            res.json(posts)

        })

})
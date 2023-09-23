import axios from 'axios';
import express from 'express';
import { User } from '../types/user';
export const userRouter = express.Router();
import { Request, Response } from "express"

userRouter.get('/user', (_req: Request, res: Response) => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
        .then((usersList: User[]) => {
            res.json(usersList)
        })
})
import express from 'express';
export const homeRouter = express.Router();


homeRouter.get('/', (_req, res, loggerMiddleware) => {
    res.json({
        status: 'Up!!!!'
    })
    loggerMiddleware()
})
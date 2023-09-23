import { NextFunction } from 'express';
import express from 'express';
import { PORT } from './const/Port';
import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRoute';
import { logger } from './utilities/Logger';
import { loggerMiddleware } from './mddleware/loggerMiddleware';

const app = express();
app.use(loggerMiddleware)
app.use(userRouter)
app.use(postRouter)
app.get("/", (_req, res, loggerMiddleware:NextFunction) => {
    res.send("Hello World")
    loggerMiddleware()

})

app.listen(PORT, () => {
    logger.info(`app is up and running on port ${PORT}!`)
})


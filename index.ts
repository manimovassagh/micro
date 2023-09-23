import express from 'express';
import { PORT } from './const/Port';
import { userRouter } from './routes/userRoute';
import { logger } from './utilities/Logger';
import { postRouter } from './routes/postRouter';

const app = express();


app.use(userRouter)
app.use(postRouter)
app.get("/", (_req, res, next) => {
    res.send("Hello World")
    next()
})

app.listen(PORT, () => {
    logger.info(`app is up and running on port ${PORT}!`)
})


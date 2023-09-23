import express from 'express';
import { PORT } from './const/Port';
import { postRouter } from './routes/postRouter';
import { userRouter } from './routes/userRoute';
import { logger } from './utilities/Logger';
import { loggerMiddleware } from './mddleware/loggerMiddleware';
import { homeRouter } from './routes/homeRouter';

const app = express();
app.use(loggerMiddleware)
app.use(userRouter)
app.use(postRouter)
app.use(homeRouter)

app.listen(PORT, () => {
    logger.info(`app is up and running on port ${PORT}!`)
})


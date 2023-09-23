import { NextFunction, Request, Response } from "express";
import { logger } from "../utilities/Logger";




export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.info("Called the router")
    next()
}
export const pino = require('pino')
import pretty from 'pino-pretty'
export const logger = pino(pretty())
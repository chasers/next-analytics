import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
    apiKey: "eA_3wro12LpZ",
    sourceToken: "eb1d841a-e0e4-4d23-af61-84465c808157"
});

// create pino loggger
const logger = pino({
    browser: {
        transmit: {
            level: "info",
            send: send,
        }
    },
    level: "debug",
    base: {
        env: process.env.ENV || "ENV not set",
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
}, stream);

export default logger
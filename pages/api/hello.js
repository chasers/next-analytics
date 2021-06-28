// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '../../logger/logger'

export default (req, res) => {
  logger.info("Responding...")

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

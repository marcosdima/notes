import express from 'express'
import { config } from './utils/config.js';

const app = express()

// Respond with the message provided.
app.get('/echo/:echo', (req, res) => {
  res.send(req.params.echo)
})

app.listen(config.port, () => console.log(`Server running on port ${PORT}`));
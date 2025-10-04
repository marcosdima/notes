import express from 'express';
import { PORT } from './utils/config.js';
import { connectDB } from './db.js';
import { log } from './utils/logger.js';

const app = express();

// Respond with the message provided.
app.get('/echo/:echo', (req, res) => {
    res.send(req.params.echo);
});

await connectDB();

app.listen(PORT, () => log(`Server running on port ${PORT}`));

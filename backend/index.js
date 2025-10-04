import express from 'express';
import { PORT } from './utils/config.js';
import { connectDB } from './db.js';
import { log } from './utils/logger.js';
import apiRouter from './routes/api.js';
import { errorHandler, unknownEndpoint } from './utils/middleware.js';

const app = express();
app.use(express.json());

// Respond with the message provided.
app.get('/echo/:echo', (req, res) => {
    res.send(req.params.echo);
});

// Try to connect the db.
await connectDB();

// Set api routes.
app.use('/api', apiRouter);

// Handle unknown endpoints.
app.use(unknownEndpoint);

// Handle errors.
app.use(errorHandler);

// Start server.
app.listen(PORT, () => log(`Server running on port ${PORT}`));

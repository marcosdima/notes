import express from 'express';
import apiRouter from './routes/api.js';
import { errorHandler, unknownEndpoint } from './utils/middleware.js';

const app = express();
app.use(express.json());

// Respond with the message provided.
app.get('/echo/:echo', (req, res) => {
    res.send(req.params.echo);
});

// Set api routes.
app.use('/api', apiRouter);

// Handle unknown endpoints.
app.use(unknownEndpoint);

// Handle errors.
app.use(errorHandler);

export default app;

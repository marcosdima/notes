import { error } from './logger.js';

export const unknownEndpoint = (req, res) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (err, req, res, next) => {
    error(`\nError: ${err.status} - Message: ${err.message}\n`);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
};

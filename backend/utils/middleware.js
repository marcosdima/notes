import { error } from './logger.js';

export const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: `unknown endpoint ${req.originalUrl}` });
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
    error(`\nError: ${err.status} - Message: ${err.message}\n`);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
};

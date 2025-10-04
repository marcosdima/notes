export const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

export const errorHandler = (err, req, res) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
};

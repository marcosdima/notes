export class AppError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
        this.name = 'AppError';
    }
}

export class NotFound extends AppError {
    constructor(target = 'Object') {
        super('Not Found: ' + target, 404);
        this.name = 'Not Found';
    }
}

export class FieldsError extends AppError {
    constructor(message, fields) {
        const plural = fields.length <= 1 ? '' : 's';
        const fullMessage = `${message}${plural}: ${fields.join(', ')}.`;
        super(fullMessage, 400);
        this.name = 'FieldsError';
    }
}

export class MissingFields extends FieldsError {
    constructor(fields = []) {
        super('Missing field', fields);
        this.name = 'MissingFields';
    }
}

export class InvalidFields extends FieldsError {
    constructor(fields = []) {
        super('Invalid field', fields);
        this.name = 'InvalidFields';
    }
}

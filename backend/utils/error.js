export class AppError extends Error {
    constructor(message, status = 500) {
        super(message);
        this.status = status;
        this.name = 'AppError';
    }
}

export class FieldsError extends AppError {
    constructor(message, fields) {
        super(message + fields.join(', ') + '.', 400);
        this.name = 'FieldsError';
    }
}

export class MissingFields extends FieldsError {
    constructor(fields = []) {
        const end = fields.length <= 1 ? ': ' : 's: ';
        super('Missing field' + end, fields);
        this.name = 'MissingFields';
    }
}

export class InvalidFields extends FieldsError {
    constructor(fields = []) {
        const end = fields.length <= 1 ? ': ' : 's: ';
        super('Invalid field' + end, fields);
        this.name = 'InvalidFields';
    }
}

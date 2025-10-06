import mongoose from 'mongoose';

export class BaseService {
    model;

    constructor(setModel) {
        this.model = setModel;
    }

    async getAll() {
        return await this.model.find();
    }

    async getById(id) {
        return await this.model.findById(id);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async remove(id) {
        return await this.model.findByIdAndDelete(id);
    }

    validateId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}

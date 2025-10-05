import { Note } from '../models/note.js';

class NoteService {
    noteLimits = Note.noteLimits();

    async getAll() {
        return await Note.find();
    }

    async getById(id) {
        return await Note.findById(id);
    }

    async create(data) {
        return await Note.create(data);
    }

    async update(id, data) {
        return await Note.findByIdAndUpdate(id, data, { new: true });
    }

    async remove(id) {
        return await Note.findByIdAndDelete(id);
    }
};

export const noteService = new NoteService()
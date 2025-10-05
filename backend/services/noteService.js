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

    validTitle(title) {
        const { titleMax } = this.noteLimits;
        return title.length > 0 && title.length <= titleMax;
    }

    validContent(content = '') {
        const { contentMax } = this.noteLimits;
        return content.length <= contentMax;
    }

    validTags(tags = []) {
        const { tagsMaxCount, tagsMaxLength } = this.noteLimits;
        const tooManyTags = tags.length > tagsMaxCount;
        const invalidTag = tags.some((tag) => tag.length > tagsMaxLength);
        return !(tooManyTags || invalidTag);
    }
}

export const noteService = new NoteService();

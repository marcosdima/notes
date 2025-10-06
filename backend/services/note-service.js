import { Note } from '../models/note.js';
import { BaseService } from './base-service.js';

class NoteService extends BaseService {
    noteLimits = Note.noteLimits();

    constructor() {
        super(Note);
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

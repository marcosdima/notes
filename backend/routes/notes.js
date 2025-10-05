import { Router } from 'express';
import { InvalidFields, MissingFields } from '../utils/error.js';
import { noteService } from '../services/noteService.js';

const notesRouter = Router();

notesRouter.get('/', async (req, res) => {
    res.send(await noteService.getAll());
});

notesRouter.post('/', async (req, res) => {
    const { title, content, tags } = req.body;
    const { titleMax, contentMax, tagsMaxCount, tagsMaxLength } =
        noteService.noteLimits;

    // Check if the required fields exists.
    if (!title) throw new MissingFields(['title']);

    // Validate data.
    if (title.length > titleMax) throw new InvalidFields(['title']);
    if (content && content.length > contentMax)
        throw new InvalidFields(['content']);
    if (tags) {
        if (tags.length > tagsMaxCount) throw new InvalidFields(['tags']);
        if (tags.some((tag) => tag.length > tagsMaxLength))
            throw new InvalidFields(['tags']);
    }

    const noteCreated = await noteService.create({ title, content, tags });
    res.status(201).send(noteCreated);
});

export default notesRouter;

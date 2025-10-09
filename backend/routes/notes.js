import { Router } from 'express';
import {
    InvalidFields,
    InvalidId,
    MissingFields,
    NotFound,
} from '../utils/error.js';
import { noteService } from '../services/note-service.js';

const notesRouter = Router();

const validateId = (id) => {
    if (!noteService.validateId(id)) throw new InvalidId(id);
};
const validateNoteExists = async (id) => {
    const exists = await noteService.getById(id);
    if (!exists) throw new NotFound(`Note with id '${id}'`);
};

notesRouter.get('/', async (req, res) => {
    res.send(await noteService.getAll());
});

notesRouter.post('/', async (req, res) => {
    const { title, content, tags } = req.body;

    // Check if the required fields exists.
    if (!title) throw new MissingFields(['title']);

    // Validate data.
    const invalidFields = [];
    if (!noteService.validTitle(title)) invalidFields.push('title');
    if (!noteService.validContent(content)) invalidFields.push('content');
    if (!noteService.validTags(tags)) invalidFields.push('tags');
    if (invalidFields.length > 0) throw new InvalidFields(invalidFields);

    const noteCreated = await noteService.create({ title, content, tags });
    res.status(201).send(noteCreated);
});

notesRouter.put('/:noteId', async (req, res) => {
    const { title, content, tags } = req.body;
    const { noteId } = req.params;
    const auxData = {};

    // Validate id.
    validateId(noteId);

    // Validate existence.
    await validateNoteExists(noteId);

    // Validate data.
    const invalidFields = [];

    // If a title was provided...
    if (title !== undefined) {
        if (!noteService.validTitle(title)) invalidFields.push('title');
        else auxData['title'] = title;
    }

    // If a content was provided...
    if (content !== undefined) {
        if (!noteService.validContent(content)) invalidFields.push('content');
        else auxData['content'] = content;
    }

    // If tags were provided...
    if (tags !== undefined) {
        if (!noteService.validTags(tags)) invalidFields.push('tags');
        else auxData['tags'] = tags;
    }

    if (invalidFields.length > 0) throw new InvalidFields(invalidFields);
    if (Object.entries(auxData).length === 0) throw new MissingFields(['any']);

    const noteUpdated = await noteService.update(noteId, auxData);
    res.status(201).send(noteUpdated);
});

notesRouter.put('/:noteId/favorite', async (req, res) => {
    const { noteId } = req.params;

    // Validate id.
    validateId(noteId);

    const noteUpdated = await noteService.setFavorite(noteId, true);
    res.status(201).send(noteUpdated);
});

notesRouter.put('/:noteId/unfavorite', async (req, res) => {
    const { noteId } = req.params;

    // Validate id.
    validateId(noteId);

    const noteUpdated = await noteService.setFavorite(noteId, false);
    res.status(201).send(noteUpdated);
});

notesRouter.put('/:noteId/archive', async (req, res) => {
    const { noteId } = req.params;

    // Validate id.
    validateId(noteId);

    const noteUpdated = await noteService.setArchived(noteId, true);
    res.status(201).send(noteUpdated);
});

notesRouter.put('/:noteId/unarchive', async (req, res) => {
    const { noteId } = req.params;

    // Validate id.
    validateId(noteId);

   const noteUpdated = await noteService.setArchived(noteId, false);
    res.status(201).send(noteUpdated);
});

notesRouter.delete('/:noteId', async (req, res) => {
    const { noteId } = req.params;

    // Validate id.
    validateId(noteId);

    // Validate existence.
    await validateNoteExists(noteId);

    await noteService.remove(noteId);
    res.status(200).send({ noteId });
});

export default notesRouter;

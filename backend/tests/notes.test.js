import request from 'supertest';
import app from '../app.js';
import { connectTestDB, closeTestDB } from './setup.js';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { noteService } from '../services/noteService.js';
import { MissingFields, InvalidFields } from '../utils/error.js';

const titleTest = 'Test note';
const contentTest = 'Note content';
const tagsTest = ['Tag'];
const noteData = {
    title: titleTest,
    content: contentTest,
    tags: tagsTest,
};

const basePath = '/api/notes';

beforeAll(async () => await connectTestDB());
afterAll(async () => await closeTestDB());

describe('Notes API', () => {
    describe('POST /api/notes', () => {
        it('With the right fields.', async () => {
            const res = await request(app).post(basePath).send(noteData);
            expect(res.statusCode).toBe(201);
            expect(res.body.title).toBe(titleTest);
        });

        it('Even with no tags.', async () => {
            const { tags, ...auxData } = noteData;
            const res = await request(app).post(basePath).send(auxData);
            expect(res.statusCode).toBe(201);
            expect(res.body.title).toBe(titleTest);
        });

        describe("Should'n create a note...", () => {
            const missingTitleMessage = new MissingFields(['title']).message;
            const invalidTitleMessage = new InvalidFields(['title']).message;
            const invalidContentMessage = new InvalidFields(['content'])
                .message;

            it('No title.', async () => {
                const { title, ...auxData } = noteData;
                const res = await request(app).post(basePath).send(auxData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(missingTitleMessage);
            });

            it('Empty title.', async () => {
                const res = await request(app)
                    .post(basePath)
                    .send({
                        ...noteData,
                        title: '',
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(missingTitleMessage);
            });

            it('Title too long.', async () => {
                const res = await request(app)
                    .post(basePath)
                    .send({
                        ...noteData,
                        title: 'a'.repeat(noteService.noteLimits.titleMax + 1),
                    });
                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTitleMessage);
            });

            it('Content too long.', async () => {
                const res = await request(app)
                    .post(basePath)
                    .send({
                        ...noteData,
                        content: 'a'.repeat(
                            noteService.noteLimits.contentMax + 1
                        ),
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidContentMessage);
            });
        });
    });

    describe('GET /api/notes', () => {
        it('Should return notes', async () => {
            const res = await request(app).get(basePath);
            expect(res.statusCode).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
        });

        it('Should get the only note created.', async () => {
            const note = await noteService.create(noteData);
            const res = await request(app).get(basePath);

            expect(res.statusCode).toBe(200);
            expect(res.body[0]).toMatchObject({
                title: note.title,
                content: note.content,
                tags: note.tags,
            });
        });
    });
});

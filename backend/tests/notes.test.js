import request from 'supertest';
import app from '../app.js';
import { connectTestDB, closeTestDB } from './setup.js';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Note } from '../models/note.js';
import { MissingFields, InvalidFields } from '../utils/error.js';

beforeAll(async () => await connectTestDB());
afterAll(async () => await closeTestDB());

describe('Notes API', () => {
    describe('POST /api/notes', () => {
        const titleTest = 'Test note';
        const contentTest = 'Note content';
        const tagsTest = ['Tag'];
        const noteData = {
            title: titleTest,
            content: contentTest,
            tags: tagsTest,
        };

        it('With the right fields.', async () => {
            const res = await request(app).post('/api/notes').send(noteData);
            expect(res.statusCode).toBe(201);
            expect(res.body.title).toBe(titleTest);
        });

        it('Even with no tags.', async () => {
            const { tags, ...auxData } = noteData;
            const res = await request(app).post('/api/notes').send(auxData);
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
                const res = await request(app).post('/api/notes').send(auxData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(missingTitleMessage);
            });

            it('Empty title.', async () => {
                const res = await request(app)
                    .post('/api/notes')
                    .send({
                        ...noteData,
                        title: '',
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(missingTitleMessage);
            });

            it('Title too long.', async () => {
                const res = await request(app)
                    .post('/api/notes')
                    .send({
                        ...noteData,
                        title: 'a'.repeat(Note.noteLimits().titleMax + 1),
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTitleMessage);
            });

            it('Content too long.', async () => {
                const res = await request(app)
                    .post('/api/notes')
                    .send({
                        ...noteData,
                        content: 'a'.repeat(Note.noteLimits().contentMax + 1),
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidContentMessage);
            });
        });
    });

    it('Should get all notes', async () => {
        const res = await request(app).get('/api/notes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

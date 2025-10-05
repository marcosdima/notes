import request from 'supertest';
import app from '../app.js';
import { connectTestDB, closeTestDB } from './setup.js';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { noteService } from '../services/noteService.js';
import { MissingFields, InvalidFields } from '../utils/error.js';

const titleTest = 'Test note';
const contentTest = 'Note content';
const tagsTest = [];
for (let i = 0; i < noteService.noteLimits.tagsMaxCount; i++) tagsTest.push(`Tag ${i}`);
const noteData = {
    title: titleTest,
    content: contentTest,
    tags: tagsTest,
};

const missingTitleMessage = new MissingFields(['title']).message;
const missingAnyMessage = new MissingFields(['any']).message;

const invalidTitleMessage = new InvalidFields(['title']).message;
const invalidContentMessage = new InvalidFields(['content']).message;
const invalidTagsMessage = new InvalidFields(['tags']).message;

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

            it('Too many tags.', async () => {
                const tags = [];
                for (let i = 0; i < noteService.noteLimits.tagsMaxCount + 1; i++) tags.push('a');
                
                const res = await request(app)
                    .post(basePath)
                    .send({
                        ...noteData,
                        tags,
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTagsMessage);
            });

            it('Long tags.', async () => {
                const { _id } = await noteService.create(noteData);

                const tags = ['a'.repeat(noteService.noteLimits.tagsMaxLength + 1)];
                
                const res = await request(app)
                    .post(basePath)
                    .send({
                        ...noteData,
                        tags,
                    });

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTagsMessage);
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

    describe('PUT /api/notes', () => {
        it('With the right fields.', async () => {
            const { _id, content, title, tags } =
                await noteService.create(noteData);

            const updatedData = {
                title: title + ' UPDATED',
                content: content + ' UPDATED',
                tags: ['UPDATED'],
            };

            const res = await request(app)
                .put(`${basePath}/${_id}`)
                .send(updatedData);

            expect(res.statusCode).toBe(201);
            expect(res.body).toMatchObject(updatedData);
            expect(res.body._id).toBe(_id.toString());
        });

        it('Even just title.', async () => {
            const { _id, content, tags } = await noteService.create(noteData);

            const updatedData = {
                title: noteData.title + ' UPDATED',
            };

            const res = await request(app)
                .put(`${basePath}/${_id}`)
                .send(updatedData);

            expect(res.statusCode).toBe(201);
            expect(res.body).toMatchObject({
                ...updatedData,
                content,
                tags,
            });
            expect(res.body._id).toBe(_id.toString());
        });

        it('Even just content.', async () => {
            const { _id, title, tags } = await noteService.create(noteData);

            const updatedData = {
                content: '',
            };

            const res = await request(app)
                .put(`${basePath}/${_id}`)
                .send(updatedData);

            expect(res.statusCode).toBe(201);
            expect(res.body).toMatchObject({
                ...updatedData,
                title,
                tags,
            });
            expect(res.body._id).toBe(_id.toString());
        });

        it('Even just tags.', async () => {
            const { _id, content, tags, title } =
                await noteService.create(noteData);

            const updatedData = {
                tags: ['UPDATED'],
            };

            const res = await request(app)
                .put(`${basePath}/${_id}`)
                .send(updatedData);

            expect(res.statusCode).toBe(201);
            expect(res.body).toMatchObject({
                ...updatedData,
                content,
                title,
            });
            expect(res.body._id).toBe(_id.toString());
        });

        describe("Should'n update a note...", () => {
            it('Empty title.', async () => {
                const { _id } = await noteService.create(noteData);

                const updatedData = { title: '' };

                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTitleMessage);
            });

            it('Title too long.', async () => {
                const { _id } = await noteService.create(noteData);

                const updatedData = {
                    title: 'a'.repeat(noteService.noteLimits.titleMax + 1),
                };

                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTitleMessage);
            });

            it('Content too long.', async () => {
                const { _id } = await noteService.create(noteData);

                const updatedData = {
                    content: 'a'.repeat(noteService.noteLimits.contentMax + 1),
                };

                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidContentMessage);
            });

            it('No fields', async () => {
                const { _id } = await noteService.create(noteData);

                const updatedData = {};

                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(missingAnyMessage);
            });

            it('Too many tags.', async () => {
                const { _id } = await noteService.create(noteData);

                const tags = [];
                for (let i = 0; i < noteService.noteLimits.tagsMaxCount + 1; i++) tags.push('a');
                const updatedData = { tags };
                
                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTagsMessage);
            });

            it('Long tags.', async () => {
                const { _id } = await noteService.create(noteData);

                const updatedData = {
                    tags: ['a'.repeat(noteService.noteLimits.tagsMaxLength + 1)]
                };
                
                const res = await request(app)
                    .put(`${basePath}/${_id}`)
                    .send(updatedData);

                expect(res.statusCode).toBe(400);
                expect(res.body.error).toBe(invalidTagsMessage);
            });
        });
    });
});

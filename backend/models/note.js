import mongoose from 'mongoose';

export const NOTE_LIMITS = {
    titleMax: 50,
    contentMax: 500,
    tagsMaxCount: 5,
    tagsMaxLength: 15,
};

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: NOTE_LIMITS.titleMax,
        },
        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: NOTE_LIMITS.contentMax,
        },
        tags: {
            type: [String],
            default: [],
            validate: [
                {
                    validator: function (arr) {
                        const { tagsMaxCount } = NOTE_LIMITS;
                        return arr.length <= tagsMaxCount;
                    },
                    message: `A note can have at most ${NOTE_LIMITS.tagsMaxCount} tags`,
                },
                {
                    validator: function (arr) {
                        const { tagsMaxLength } = NOTE_LIMITS;
                        return arr.every((tag) => tag.length <= tagsMaxLength);
                    },
                    message: `Each tag must be at most ${NOTE_LIMITS.tagsMaxLength} characters long`,
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

noteSchema.statics.noteLimits = function () {
    return { ...NOTE_LIMITS };
};

export const Note = mongoose.model('Note', noteSchema);

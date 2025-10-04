import mongoose from 'mongoose';

const NOTE_LIMITS = {
    titleMax: 50,
    contentMax: 500,
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
        },
    },
    {
        timestamps: true,
    }
);

noteSchema.statics.noteLimits = function () {
    return { ...NOTE_LIMITS };
};

export default mongoose.model('Note', noteSchema);

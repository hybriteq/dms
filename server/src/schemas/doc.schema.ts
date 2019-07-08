import * as mongoose from 'mongoose';

export const DocSchema = new mongoose.Schema({
    path: String,
    updatedTime: Number,
    type: String,
    content: mongoose.Schema.Types.Mixed,
});
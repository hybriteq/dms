import * as mongoose from 'mongoose';

export const DocSchema = new mongoose.Schema({
    path: String,
    t: Number,
    c: mongoose.Schema.Types.Mixed,
});
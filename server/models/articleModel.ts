import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IArticle extends Document {
    id: number;
    title: string;
    description: string;
    image: string;
    content: string;
}

const ArticleSchema: Schema<IArticle> = new Schema({
    id: { type: Number, required: true, unique: true },  // מזהה ייחודי
    title: { type: String, required: true },  // כותרת המאמר
    description: { type: String, required: true },  // תיאור המאמר
    image: { type: String, required: true },  // תמונה
    content: { type: String, required: true },  // תוכן המאמר
});

export const ArticleModel = mongoose.model<IArticle>('Article', ArticleSchema);

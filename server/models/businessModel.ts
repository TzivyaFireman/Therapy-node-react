import mongoose, { Document, Schema } from 'mongoose';

// ממשק עבור מסמכי עסק
export interface IBusiness extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
}

// הגדרת הסכימה לעסק
const BusinessSchema: Schema<IBusiness> = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

export const BusinessModel = mongoose.model<IBusiness>('Business', BusinessSchema);

import mongoose, { Document, Schema } from 'mongoose';

// ממשק עבור מסמכי שירות
export interface IService extends Document {
  name: string;
  description: string;
  price: number;
  duration: number; // משך זמן בדקות
}

// הגדרת הסכימה לשירות
const ServiceSchema: Schema<IService> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // משך זמן בדקות
});

export const ServiceModel = mongoose.model<IService>('Service', ServiceSchema);

import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUser extends Document {
  id: string;  // מזהה ייחודי מותאם
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  id: { type: String, default: uuidv4, unique: true },  // יצירת מזהה ייחודי ברירת מחדל
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);

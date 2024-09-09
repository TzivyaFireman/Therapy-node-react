import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IMessage extends Document {
  id: string;  // מזהה ייחודי מותאם
  customerId: mongoose.Types.ObjectId;
  content: string;
  dateSent: Date;
}

const MessageSchema: Schema<IMessage> = new Schema({
  id: { type: String, default: uuidv4, unique: true },  // יצירת מזהה ייחודי ברירת מחדל
  customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  content: { type: String, required: true },
  dateSent: { type: Date, default: Date.now },
});

export const MessageModel = mongoose.model<IMessage>('Message', MessageSchema);

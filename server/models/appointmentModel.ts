import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IAppointment extends Document {
  id: string;  // מזהה ייחודי מותאם
  serviceId: string;  // מזהה ייחודי מותאם, סטרינג
  customerId: string;  // מזהה ייחודי מותאם, סטרינג
  date: Date;
  note: string;
}

const AppointmentSchema: Schema<IAppointment> = new Schema({
  id: { type: String, default: uuidv4, unique: true },  // יצירת מזהה ייחודי ברירת מחדל
  serviceId: { type: String, required: true },  // מזהה מותאם של השירות
  customerId: { type: String, required: true },  // מזהה מותאם של הלקוח
  date: { type: Date, required: true },
  note: { type: String, default: '' },
});

export const AppointmentModel = mongoose.model<IAppointment>('Appointment', AppointmentSchema);

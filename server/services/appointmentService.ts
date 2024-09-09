import { AppointmentModel, IAppointment } from '../models/appointmentModel';

interface CreateAppointmentDto {
  serviceId: string;
  customerId: string;
  date: Date;
  note?: string;
}

export class AppointmentService {
  // יצירת פגישה חדשה
  async createAppointment(appointmentData: CreateAppointmentDto): Promise<IAppointment> {
    const newAppointment = new AppointmentModel({
      serviceId: appointmentData.serviceId,
      customerId: appointmentData.customerId,
      date: appointmentData.date,
      note: appointmentData.note || '',
    });
    return newAppointment.save();
  }

  // קבלת כל הפגישות
  async getAllAppointments(): Promise<IAppointment[]> {
    return AppointmentModel.find().exec();
  }

  // קבלת פגישה לפי מזהה ייחודי
  async getAppointmentById(appointmentId: string): Promise<IAppointment | null> {
    return AppointmentModel.findOne({ id: appointmentId }).exec();
  }

  // עדכון פגישה
  async updateAppointment(appointmentId: string, updateData: Partial<IAppointment>): Promise<IAppointment | null> {
    return AppointmentModel.findOneAndUpdate({ id: appointmentId }, updateData, { new: true }).exec();
  }

  // מחיקת פגישה
  async deleteAppointment(appointmentId: string): Promise<IAppointment | null> {    
    return AppointmentModel.findOneAndDelete({ id: appointmentId }).exec();
  }
}

import { ServiceModel, IService } from '../models/serviceModel';

interface CreateServiceDto {
  name: string;
  description: string;
  price: number;
  duration: number;
}

export class ServiceService {
  // יצירת שירות חדש
  async createService(serviceData: CreateServiceDto): Promise<IService> {
    const newService = new ServiceModel(serviceData);
    return newService.save();
  }

  // קבלת כל השירותים
  async getAllServices(): Promise<IService[]> {
    return ServiceModel.find().exec();
  }

  // קבלת שירות לפי מזהה
  async getServiceById(serviceId: string): Promise<IService | null> {
    return ServiceModel.findOne({ id: serviceId }).exec();
  }

  // עדכון שירות קיים
  async updateService(serviceId: string, updateData: Partial<IService>): Promise<IService | null> {
    return ServiceModel.findOneAndUpdate({ id: serviceId }, updateData, { new: true }).exec();
  }

  // מחיקת שירות
  async deleteService(serviceId: string): Promise<IService | null> {
    return ServiceModel.findOneAndDelete({ id: serviceId }).exec();
  }
}

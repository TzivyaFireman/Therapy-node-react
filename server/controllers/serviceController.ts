import { Request, Response } from 'express';
import { ServiceService } from '../services/serviceService';

export class ServiceController {
    private serviceService: ServiceService;

    constructor(serviceService: ServiceService) {
        this.serviceService = serviceService;
    }

    // יצירת שירות חדש
    async createService(req: Request, res: Response): Promise<void> {
        try {
            const { name, description, price, duration } = req.body;
            const newService = await this.serviceService.createService({ name, description, price, duration });
            res.status(201).json(newService);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create service', error });
        }
    }

    // קבלת כל השירותים
    async getAllServices(req: Request, res: Response): Promise<void> {
        try {
            const services = await this.serviceService.getAllServices();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: 'Failed to get services', error });
        }
    }

    // קבלת שירות לפי מזהה
    async getServiceById(req: Request, res: Response): Promise<void> {
        try {
            const serviceId = req.params.id;
            const service = await this.serviceService.getServiceById(serviceId);
            if (!service) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.status(200).json(service);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to get service', error });
        }
    }

    // עדכון שירות קיים
    async updateService(req: Request, res: Response): Promise<void> {
        try {
            const serviceId = req.params.id;
            const updateData = req.body;
            const updatedService = await this.serviceService.updateService(serviceId, updateData);
            if (!updatedService) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.status(200).json(updatedService);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update service', error });
        }
    }

    // מחיקת שירות
    async deleteService(req: Request, res: Response): Promise<void> {
        try {
            const serviceId = req.params.id;
            const deletedService = await this.serviceService.deleteService(serviceId);
            if (!deletedService) {
                res.status(404).json({ message: 'Service not found' });
            } else {
                res.status(200).json({ message: 'Service deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete service', error });
        }
    }
}

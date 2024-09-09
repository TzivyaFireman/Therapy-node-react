import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';

export class AppointmentController {
    private appointmentService: AppointmentService;

    constructor(appointmentService: AppointmentService) {
        this.appointmentService = appointmentService;
    }

    // יצירת פגישה חדשה
    async createAppointment(req: Request, res: Response): Promise<void> {
        try {
            const { serviceId, customerId, date, note } = req.body;
            const newAppointment = await this.appointmentService.createAppointment({
                serviceId,
                customerId,
                date,
                note,
            });
            res.status(201).json(newAppointment);
        } catch (error) {
            res.status(500).json({ message: 'Failed to create appointment', error });
        }
    }

    // קבלת כל הפגישות
    async getAllAppointments(req: Request, res: Response): Promise<void> {
        try {
            const appointments = await this.appointmentService.getAllAppointments();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: 'Failed to get appointments', error });
        }
    }

    // קבלת פגישה לפי מזהה
    async getAppointmentById(req: Request, res: Response): Promise<void> {
        try {
            const appointmentId = req.params.id;
            const appointment = await this.appointmentService.getAppointmentById(appointmentId);
            if (!appointment) {
                res.status(404).json({ message: 'Appointment not found' });
            } else {
                res.status(200).json(appointment);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to get appointment', error });
        }
    }

    // עדכון פגישה קיימת
    async updateAppointment(req: Request, res: Response): Promise<void> {
        try {
            const appointmentId = req.params.id;
            const updateData = req.body;
            const updatedAppointment = await this.appointmentService.updateAppointment(appointmentId, updateData);
            if (!updatedAppointment) {
                res.status(404).json({ message: 'Appointment not found' });
            } else {
                res.status(200).json(updatedAppointment);
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to update appointment', error });
        }
    }

    // מחיקת פגישה
    async deleteAppointment(req: Request, res: Response): Promise<void> {
        try {
            const appointmentId = req.params.id;
            const deletedAppointment = await this.appointmentService.deleteAppointment(appointmentId);
            if (!deletedAppointment) {
                res.status(404).json({ message: 'Appointment not found' });
            } else {
                res.status(200).json({ message: 'Appointment deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete appointment', error });
        }
    }
}

import { Router } from 'express';
import { AppointmentController } from '../controllers/appointmentController';
import { AppointmentService } from '../services/appointmentService';

const appointmentService = new AppointmentService();
const appointmentController = new AppointmentController(appointmentService);
const router = Router();

router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);
router.put('/appointments/:id', appointmentController.updateAppointment);
router.delete('/appointments/:id', appointmentController.deleteAppointment);

export default router;
import { Router } from 'express';
import { ServiceController } from '../controllers/serviceController';
import { ServiceService } from '../services/serviceService';

const serviceService = new ServiceService();
const serviceController = new ServiceController(serviceService);
const router = Router();

router.post('/services', serviceController.createService);
router.get('/services', serviceController.getAllServices);
router.get('/services/:id', serviceController.getServiceById);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

export default router;

import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../services/userService';

const userService = new UserService();
const userController = new UserController(userService);

const router = Router();

router.post('/users', userController.createUser.bind(userController));
router.get('/users/:id', userController.getUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));

export default router;
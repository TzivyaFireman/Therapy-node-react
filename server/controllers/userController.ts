import { Request, Response } from 'express';
import { UserService } from '../services/userService';

export class UserController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }


    async createUser(req: Request, res: Response) {
        const { username, email, password } = req.body;
        try {
            const existingUser = await this.userService.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const user = await this.userService.createUser(username, email, password);
            return res.status(201).json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isPasswordValid = password === user.password;

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            return res.status(200).json({ message: 'Login successful', user });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getUser(req: Request, res: Response) {
        const userId = req.params.id;
        try {
            const user = await this.userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        const userId = req.params.id;
        const updateData = req.body;
        try {
            const user = await this.userService.updateUser(userId, updateData);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const userId = req.params.id;
        try {
            const user = await this.userService.deleteUser(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json({ message: 'User deleted' });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

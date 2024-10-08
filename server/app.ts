import express from 'express';
import connectDB from './services/dbConnection.service'; 
import userRoutes from './routers/userRoutes';
import appointmentRoutes from './routers/appointmentRoutes';
import serviceRoutes from './routers/serviceRoutes';
import articleRoutes from './routers/articleRouter';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', articleRoutes);
app.use('/', userRoutes);
app.use('/', appointmentRoutes);
app.use('/', serviceRoutes);

connectDB();
app.listen(3000, function () {
    console.log("Server Started at 3000");
});
import express from 'express';
import connectDB from './services/dbConnection.service'; 
import userRoutes from './routers/userRoutes';
import appointmentRoutes from './routers/appointmentRoutes';
import serviceRoutes from './routers/serviceRoutes';

const app = express();
app.use(express.json());
app.use('/', userRoutes);
app.use('/', appointmentRoutes);
app.use('/', serviceRoutes);

connectDB();
app.listen(3000, function () {
    console.log("Server Started at 3000");
});
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log('MongoDB connected');
});

app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

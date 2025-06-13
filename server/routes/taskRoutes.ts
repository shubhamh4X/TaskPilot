import express from 'express';
import Task from '../models/Task';

const router = express.Router();

router.get('/', async (_req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export default router;

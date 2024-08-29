import express from 'express';
import coursesRouter from './courses/courses.router';

const app = express();
app.use(express.json());

app.use('/api/courses', coursesRouter);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

export default app;


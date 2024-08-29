import { Router } from 'express';
import { getCourses, createCourse } from './courses.handlers';

const router = Router();

router.get('/', getCourses);
router.post('/', createCourse);

export default router;


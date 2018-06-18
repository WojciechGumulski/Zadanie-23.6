import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

router.route('/notes').post(NoteController.addNote);
router.route('/notes').put(NoteController.changeNoteName);
router.route('/notes').delete(NoteController.removeNote);

export default router;

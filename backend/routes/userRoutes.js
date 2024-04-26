import express from 'express'
import {test} from '../controllers/userController.js';

const router = express.Router();

// router.get('/test', (req, res) => {
//     res.json({message: 'Api is working'});
// });

router.get('/test', test);

export default router;  
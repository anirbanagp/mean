import express from 'express';

import AuthController from '../app/controllers/auth.controller';
import { authenticatd } from '../app/middleware/kernel';

const router = express.Router();

router.post("/login", AuthController.login.bind(AuthController));
router.get("/home", authenticatd, AuthController.index.bind(AuthController));

export = router;

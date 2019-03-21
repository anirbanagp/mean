import express from 'express';

import AuthController from '../app/http/controllers/auth.controller';
import authenticated from '../app/http/middleware/jwt-auth.middleware';
import validationMiddleware from '../app/http/middleware/validation.middleware';
import LoginRequest from '../app/http/validations/login.request';

const router = express.Router();

router.post("/login", validationMiddleware(LoginRequest), AuthController.login.bind(AuthController));
router.get("/home", authenticated, AuthController.index.bind(AuthController));

export = router;

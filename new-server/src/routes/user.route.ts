import express from 'express';
import UserRequest from '../app/http/validations/user.request';
import UserController from '../app/http/controllers/user.controller';
import validationMiddleware from '../app/http/middleware/validation.middleware';

const router = express.Router();

router.get("/users", UserController.index.bind(UserController));
router.post("/users/save", validationMiddleware(UserRequest), UserController.store.bind(UserController));

export = router;

import express from 'express';
import UserController from './../app/controllers/user.controller';

const router = express.Router();

router.get("/users", UserController.index.bind(UserController));

export default router;

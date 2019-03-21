import express from 'express';
import UserController from '../app/http/controllers/user.controller';

const router = express.Router();

router.get("/users", UserController.index.bind(UserController));
// router.get("/routes", UserController.testRoutes.bind(UserController));

export = router;

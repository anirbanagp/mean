import { Request, Response } from "express";
import { BaseController } from "./../shared/classes/base.controller";

class User extends BaseController {

    public index(req: Request, res: Response) {
        this.check();

        res.json({ error: false, data: [{ name: "anirban", age: 25 }] });
    }
}

export default new User();

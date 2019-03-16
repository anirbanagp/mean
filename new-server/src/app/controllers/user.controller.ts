import { Request, Response } from "express";
import { BaseController } from "./../shared/classes/base.controller";

import fs from 'fs';
import path from 'path';

class User extends BaseController {

  public index(req: Request, res: Response) {
    res.json({ error: false, data: [{ name: "anirban", age: 25 }] });
  }

  public testRoutes(req: Request, res: Response) {
    let routesArray: any[] = [];
    const routerPath = global.appRoot + "/routes/";

    fs.readdirSync(routerPath).forEach((file) => {
      if (file.indexOf('.map') === -1) {
        const filePath = path.join(routerPath, file);
        const requireFilePath = path.resolve(filePath);
        console.log(require(requireFilePath));
        routesArray.push(require(requireFilePath));
      }
    });

    return res.json(routesArray);
  }
}

export default new User();

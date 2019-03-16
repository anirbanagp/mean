import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs';
import path from 'path';

class ExpressService {

    public init(db: any) {
        const app = express();

        this.initMiddleware(app);

        this.initRoutes(app);

        return app;

    }
    public initMiddleware(app: any): any {
        app.use(
            bodyParser.urlencoded({
                extended: true,
            }),
        );
        app.use(bodyParser.json());
    }
    public initRoutes(app: any): any {
        const routesArray: any[] = [];
        const routerPath = global.appRoot + "/routes/";

        fs.readdirSync(routerPath).forEach((file) => {
          if (file.indexOf('.map') === -1) {
            const filePath = path.join(routerPath, file);
            const requireFilePath = path.resolve(filePath);
            routesArray.push(require(requireFilePath));
          }
        });
        app.use("/api", routesArray);
    }
}
export const Express = new ExpressService();

import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs';
import path from 'path';
import errorMiddleware from "./../app/http/middleware/error.middleware";

class ExpressService {

    public init(db: any) {
        const app = express();

        this.initMiddleware(app);

        this.initRoutes(app);

        this.initErrorHandler(app);

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

    public initErrorHandler(app: any): any {
        app.use(errorMiddleware);
    }

    public initRoutes(app: any): any {
        const routesArray: any[] = [];
        const routerPath = path.resolve(process.cwd() + "/dist/routes/");

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

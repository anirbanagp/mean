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
        let routesArray: any[] = [];
        // const routerPath = global.appRoot + "/routes/";

        // fs.readdirSync(routerPath).forEach((file) => {
        //     const filePath = path.join(routerPath, file);
        //     const requireFilePath = path.resolve(filePath);
        //     console.log(requireFilePath);
        //     routesArray.push(require('requireFilePath'));
        // });
        routesArray.push(require('./../routes/user'));

        app.use("/api", routesArray);
    }
};
// export default new Express();
// const xyz = 123;
export const Express = new ExpressService();

import chalk from "chalk";
import { config } from "./../config/env";
import { Express as express } from './express';
import { mongooseService } from './mongoose';

class App {

    public init(callback: CallableFunction) {
        mongooseService.connect((db: any) => {
            const app = express.init(db);
            if (callback) {
                callback(app, db);
            }
        });
    }
    public start(callback: CallableFunction = null) {
        this.init((app: any, db: any) => {
            const port = config.server.port;

            // Start the app by listening on <port> at <host>
            app.listen(port, config.server.host, () => {
                console.log("--------");
                console.log(chalk.green(config.app.name));
                console.log();
                console.log(chalk.green("Server:          " + config.server.host));
                console.log(chalk.green("Port:            " + config.server.port));
                console.log(chalk.green("Database:        " + config.db.url));
                console.log("--------");
                if (callback) { callback(app, db); }
            });
        });

    }
}
export default new App();

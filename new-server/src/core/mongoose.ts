import chalk from "chalk";
import mongoose from "mongoose";
import { config } from "./../config/env";

class Mongoose {
    public connect(callback: CallableFunction) {
        mongoose.Promise = config.db.promise;
        mongoose
            .connect(
                config.db.url,
                config.db.options,
            )
            .then((connection: any) => {
                mongoose.set("debug", config.db.debug);
                if (callback) {
                    callback(connection.db);
                }
            })
            .catch((err: any) => {
                console.error(chalk.red("Could not connect to MongoDB!"));
                console.log(err);
            });
    }
}
export const mongooseService = new Mongoose();

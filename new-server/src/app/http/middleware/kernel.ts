import errorMiddleware from "./error.middleware";
import jwt from "./jwt-auth.middleware";

export const authenticatd = jwt;
export const errorHandler = errorMiddleware;

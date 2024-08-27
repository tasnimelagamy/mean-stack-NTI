import { Application, Request, Response, NextFunction } from "express";
import categoriesRoute from "./categoriesRoute";
import subcategoriesRoute from "./subcategoriesRoute";
import ApiErrors from "../utils/apiErrors";
import globalErrors from "../middlewares/globalErrors";

const mountRoutes = (app: Application): void => {
  app.use('/api/v1/categories', categoriesRoute);
  app.use('/api/v1/subcategories', subcategoriesRoute);
  app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ApiErrors(`The router ${req.originalUrl} is not found`, 400))
  })
  app.use(globalErrors);
}

export default mountRoutes;
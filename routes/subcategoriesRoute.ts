import { Router } from "express";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updateSubcategory } from "../controllers/subCategories";
import { createSubcategoryValidator, deleteSubcategoryValidator, getSubcategoryValidator, updateSubcategoryValidator } from "../utils/validation/subcategoriesValidator";
const subcategoriesRoute: Router = Router();

subcategoriesRoute.route('/')
  .get(getSubcategories)
  .post(createSubcategoryValidator, createSubcategory);

subcategoriesRoute.route('/:id')
  .get(getSubcategoryValidator, getSubcategory)
  .put(updateSubcategoryValidator, updateSubcategory)
  .delete(deleteSubcategoryValidator, deleteSubcategory);

export default subcategoriesRoute;
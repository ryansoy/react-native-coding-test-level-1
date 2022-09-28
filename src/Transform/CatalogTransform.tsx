import { CategoryModel } from "../model/CatalogListModel";

export const CategoryListTransform = (lists: object[]) => {
  let categoryList: CategoryModel[] = [];
  lists.forEach((obj: any, index: number) => {
    categoryList.push({
      index: index,
      name: obj?.name || "",
      url: obj?.url,
    });
  });

  return categoryList;
};

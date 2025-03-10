import Backendless from "../backendless";

export interface IProduct {
  img: string;
  title: string;
  category: string;
}

export const getProducts = async (
  limit?: number,
  category?: string
): Promise<IProduct[]> => {
  try {
    const query = Backendless.DataQueryBuilder.create();

    if (category) {
      query.setWhereClause(`category = '${category}'`);
    }

    const products = await Backendless.Data.of("products").find<IProduct>(
      query
    );

    return limit ? products.slice(0, limit) : products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const products = await Backendless.Data.of("products").find<IProduct>();
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

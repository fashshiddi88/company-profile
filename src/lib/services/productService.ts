import Backendless from "../backendless";

export interface Product {
  img: string;
  title: string;
  category: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await Backendless.Data.of("products").find<Product>();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

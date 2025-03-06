import Backendless from "../backendless";

export interface IProduct {
  img: string;
  title: string;
  category: string;
}

export const getProducts = async (limit?:number): Promise<IProduct[]> => {
  try {
    const products = await Backendless.Data.of("products").find<IProduct>();
    return limit ? products.slice(0, limit) : products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

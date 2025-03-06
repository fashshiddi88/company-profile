import Backendless from "../backendless";

export interface ICustomer {
  name: string;
  job: string;
  img: string;
  review: string;
}

export const getCustomers = async (): Promise<ICustomer[]> => {
  try {
    const customers = await Backendless.Data.of("customers").find<ICustomer>();
    return customers;
  } catch (error) {
    console.log("Error fetching customers:", error);
    return [];
  }
};

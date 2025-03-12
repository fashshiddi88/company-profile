import Backendless from "../backendless";

interface ILogo {
  img: string;
}

export const getLogo = async (): Promise<string[]> => {
  try {
    const data = await Backendless.Data.of("logo").find<ILogo>();
    return data.map((item) => item.img);
  } catch (error) {
    console.error("Error fetching background images:", error);
    return [];
  }
};

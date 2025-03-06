
import Backendless from '../backendless'


interface HomeData {
    background: string;
  }

export const getBackgroundImages = async (): Promise<string[]> => {
    try {
      const data = await Backendless.Data.of("home").find<HomeData>();
      return data.map((item) => item.background); // Ambil semua gambar sebagai array
    } catch (error) {
      console.error("Error fetching background images:", error);
      return [];
    }
  };

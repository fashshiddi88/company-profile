import Backendless from "../backendless";

export interface ITeam {
  nama: string;
  jabatan: string;
  img: string;
  experience: string;
}

export const getTeams = async (): Promise<ITeam[]> => {
  try {
    const teams = await Backendless.Data.of("teams").find<ITeam>();
    return teams;
  } catch (error) {
    console.log("Error fetching customers:", error);
    return [];
  }
};

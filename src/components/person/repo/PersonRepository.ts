import type { Person } from "../model/PersonModel";
import { BaseRepository } from "../../../utils/BaseRepository";  
 
export const PersonRepository = ()  => {
  const baseRepository = BaseRepository<Person>();

  return {
    ...baseRepository,
    getByLastname : async (fname: string): Promise<Person | null> => {   
      return await (await baseRepository.getAll()).find(a=>a.firstName === fname ) ?? null;
    }
  };
};
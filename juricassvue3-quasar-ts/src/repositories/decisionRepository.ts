import { JudilibreApiService } from '../services/JudilibreApiService';
import Decision from '../data/model/Decision';

const apiService = new JudilibreApiService();

export const getDecisionApi = async (id: string): Promise<Decision> => {
  const result = await apiService.fetch(
    `decision/?id=${id}&resolve_references=true`
  );
  return new Decision(result);
};

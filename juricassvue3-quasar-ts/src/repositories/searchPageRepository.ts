import { JudilibreApiService } from '../services/JudilibreApiService';
import Query from '../data/model/Query';
import SearchPage from '../data/model/SearchPage';

const apiService = new JudilibreApiService();

export const searchApi = async (queryObj: Query) => {
  let queryString = `?query=${queryObj.query}`;
  if (queryObj.startDate) queryString += `&date_start=${queryObj.startDate}`;
  if (queryObj.endDate) queryString += `&date_end=${queryObj.endDate}`;
  if (queryObj.exact) queryString += `&operator=${queryObj.exact}`;
  queryString += '&resolve_references=true';

  const result = await apiService.fetch(`search/${queryString}`);
  return new SearchPage(result);
};

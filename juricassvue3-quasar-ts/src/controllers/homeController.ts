import { ref } from 'vue';
import { searchApi } from '../repositories/searchPageRepository';
import { errors } from '../controllers/appController';
import Query from '../data/model/Query';
import SearchPage from '../data/model/SearchPage';
import JuricassError from '../data/model/JuricassError';

export const searchResult = ref(new SearchPage({}));
export const isLoading = ref(false);
export const quickQuery = ref('propriété');
export const query = ref(undefined);
export const exact = ref(false);
export const startDate = ref(undefined);
export const endDate = ref(undefined);
export const popDrawer = ref(false);

const queryObj = ref(new Query(query?.value ?? quickQuery.value));

export const search = async () => {
  try {
    isLoading.value = true;
    //TODO remove default value when API will be ready for home query
    const result = await searchApi(queryObj.value);
    // a true adapter implementation would have been a better approach, but it's a small demo project
    // We should also instanciate every object prop but I just really need Decision here
    searchResult.value = result;
    if (searchResult.value.results.length) popDrawer.value = false;
    isLoading.value = false;
  } catch (error) {
    errors.value.push(new JuricassError({ message: error as string }));
  }
};

export const handleSearch = async () => {
  quickQuery.value = undefined; //TODO handle default value when API will be ready
  const queryDatas = {
    query: query.value,
    startDate: startDate.value?.split('T')[0],
    endDate: endDate.value?.split('T')[0],
    exact: exact.value ? 'exact' : undefined,
  };
  queryObj.value = queryDatas;
  await search();
};

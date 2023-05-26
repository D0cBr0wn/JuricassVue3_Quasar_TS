import { ref } from 'vue';
import { getDecisionApi } from '../repositories/decisionRepository';
import JuricassError from '../data/model/JuricassError';
// import { Zone } from '../data/model/Zone';
import { errors } from '../controllers/appController';

export const decision = ref({});
export const isLoading = ref(false);

export const getDecision = async (id) => {
  try {
    isLoading.value = true;
    const result = await getDecisionApi(id);
    // a true adapter implementation would have been a better approach, but it's a small demo project
    // We should also instanciate every object prop but I just really need Zones here
    // if (result && result.zones) {
    //   const instantiatedZones = [];
    //   for (const [key, value] of Object.entries(result.zones)) {
    //     value.forEach((segment) => {
    //       const zone = new Zone({
    //         name: key,
    //         start: segment.start,
    //         end: segment.end,
    //       });
    //       instantiatedZones.push(zone);
    //     });
    //   }
    //   // zones are not sorted by the API so we need to do it here
    //   instantiatedZones.sort((a, b) => (a.end > b.end ? 1 : -1));
    //   result.zones = instantiatedZones;
    // }

    decision.value = result;

    isLoading.value = false;
  } catch (error) {
    errors.value.push(new JuricassError({ message: error as string }));
  }
};

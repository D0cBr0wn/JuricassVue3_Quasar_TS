import { Ref } from 'vue';
export default class Query {
  query: string | undefined | Ref<string | undefined>;
  startDate?: string | Ref<string | undefined>;
  endDate?: string | Ref<string | undefined>;
  exact: boolean | Ref<boolean>;

  constructor(
    query: string | Ref<string | undefined>,
    startDate?: string,
    endDate?: string,
    exact = false
  ) {
    this.query = query;
    this.startDate = startDate;
    this.endDate = endDate;
    this.exact = exact;
  }
}

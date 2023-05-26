import SearchResult from './SearchResult';

export default class SearchPage {
  page?: number;
  pageSize?: number;
  query?: SearchQuery;
  results: SearchResult[];
  total?: number;
  previousPage?: string | null;
  nextPage?: string | null;
  took?: number | null;
  maxScore?: number;
  relaxed?: boolean;
  searchQuery?: string;

  constructor(data: {
    page?: number;
    pageSize?: number;
    query?: SearchQuery;
    results: SearchResult[];
    total?: number;
    maxScore?: number;
    relaxed?: boolean;
    searchQuery?: string;
    previousPage?: string | null;
    nextPage?: string | null;
    took?: number | null;
  }) {
    this.page = data?.page;
    this.pageSize = data?.pageSize;
    this.query = data?.query;
    this.results = data?.results ?? [];
    this.total = data?.total;
    this.previousPage = data?.previousPage;
    this.nextPage = data?.nextPage;
    this.took = data?.took;
    this.maxScore = data?.maxScore;
    this.relaxed = data?.relaxed;
    this.searchQuery = data?.searchQuery;
  }
}

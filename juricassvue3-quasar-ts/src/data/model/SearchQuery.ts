class SearchQuery {
  query?: string | null;
  field?: string[] | null;
  operator?: string | null;
  type?: string[] | null;
  theme?: string[] | null;
  chamber?: string[] | null;
  formation?: string[] | null;
  jurisdiction?: string[] | null;
  location?: string[] | null;
  publication?: string[] | null;
  solution?: string[] | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  sort?: string | null;
  order?: string | null;
  pageSize?: number | null;
  page?: number | null;
  resolveReferences?: boolean;

  constructor(
    query?: string | null,
    field?: string[] | null,
    operator?: string | null,
    type?: string[] | null,
    theme?: string[] | null,
    chamber?: string[] | null,
    formation?: string[] | null,
    jurisdiction?: string[] | null,
    location?: string[] | null,
    publication?: string[] | null,
    solution?: string[] | null,
    dateStart?: string | null,
    dateEnd?: string | null,
    sort?: string | null,
    order?: string | null,
    pageSize?: number | null,
    page?: number | null,
    resolveReferences = false
  ) {
    this.query = query;
    this.field = field;
    this.operator = operator;
    this.type = type;
    this.theme = theme;
    this.chamber = chamber;
    this.formation = formation;
    this.jurisdiction = jurisdiction;
    this.location = location;
    this.publication = publication;
    this.solution = solution;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.sort = sort;
    this.order = order;
    this.pageSize = pageSize;
    this.page = page;
    this.resolveReferences = resolveReferences;
  }
}

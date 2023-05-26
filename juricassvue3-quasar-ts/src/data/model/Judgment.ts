class Judgement {
  id: string | null;
  date: string; // TODO: handle date properly
  title: string;
  jurisdiction: string | null;
  chamber: string | null;
  solution: string | null;
  number: string | null;
  url: string | null;

  constructor(
    id: string | null = null,
    date: string,
    title: string,
    jurisdiction: string | null = null,
    chamber: string | null = null,
    solution: string | null = null,
    number: string | null = null,
    url: string | null = null
  ) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.jurisdiction = jurisdiction;
    this.chamber = chamber;
    this.solution = solution;
    this.number = number;
    this.url = url;
  }
}

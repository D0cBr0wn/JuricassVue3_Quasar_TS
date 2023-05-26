export default class SearchResult {
  score: number;
  highlights?: Record<string, string[]> | null;
  id: string;
  jurisdiction: string;
  chamber: string;
  number: string;
  numbers: string[];
  ecli?: string | null;
  formation?: string | null;
  publication: string[];
  decisionDate: string;
  type: string;
  solution: string;
  solutionAlt?: string | null;
  summary?: string | null;
  bulletin?: string | null;
  files?: FileLink[] | null;
  themes?: string[] | null;

  constructor(data: {
    score: number;
    id: string;
    jurisdiction: string;
    chamber: string;
    number: string;
    numbers: string[];
    publication: string[];
    decisionDate: string;
    type: string;
    solution: string;
    highlights?: Record<string, string[]> | null;
    ecli?: string | null;
    formation?: string | null;
    solutionAlt?: string | null;
    summary?: string | null;
    bulletin?: string | null;
    files?: FileLink[] | null;
    themes?: string[] | null;
  }) {
    this.score = data?.score;
    this.highlights = data?.highlights;
    this.id = data?.id;
    this.jurisdiction = data?.jurisdiction;
    this.chamber = data?.chamber;
    this.number = data?.number;
    this.numbers = data?.numbers;
    this.ecli = data?.ecli;
    this.formation = data?.formation;
    this.publication = data?.publication;
    this.decisionDate = data?.decisionDate;
    this.type = data?.type;
    this.solution = data?.solution;
    this.solutionAlt = data?.solutionAlt;
    this.summary = data?.summary;
    this.bulletin = data?.bulletin;
    this.files = data?.files;
    this.themes = data?.themes;
  }

  get formattedDecisionDate() {
    const date = new Date(this.decisionDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}

import Zones from 'src/data/interfaces/Zones';
import Zone from 'src/data/model/Zone';
export default class Decision {
  id!: string;
  source!: string;
  zones: Zone[] = [];
  text!: string;
  textHighlight?: string | null;
  nac?: string | null;
  updateDate?: string | null;
  visa?: TextLink[] | null;
  rapprochements?: Rapprochement[] | null;
  toBeDeleted!: boolean;
  jurisdiction!: string;
  chamber!: string;
  number!: string;
  numbers!: string[];
  ecli?: string | null;
  formation?: string | null;
  publication!: string[];
  decisionDate!: string;
  type!: string;
  solution!: string;
  solutionAlt?: string | null;
  summary!: string;
  bulletin?: string | null;
  files?: FileLink[] | null;
  themes!: string[];
  portalis?: string | null;
  forward?: string | null;
  contested?: Judgement | null;
  timeline?: Judgement[] | null;
  partial!: boolean;
  legacy?: any | null;

  constructor(data: {
    id: string;
    source: string;
    zones?: Zones;
    text: string;
    textHighlight?: string | null;
    nac?: string | null;
    update_date?: string | null;
    visa?: TextLink[] | null;
    rapprochements?: Rapprochement[] | null;
    toBeDeleted?: boolean;
    jurisdiction: string;
    chamber: string;
    number: string;
    numbers: string[];
    ecli?: string | null;
    formation?: string | null;
    publication: string[];
    decision_date: string;
    type: string;
    solution: string;
    solutionAlt?: string | null;
    summary: string;
    bulletin?: string | null;
    files?: FileLink[] | null;
    themes: string[];
    portalis?: string | null;
    forward?: string | null;
    contested?: Judgement | null;
    timeline?: Judgement[] | null;
    partial?: boolean;
    legacy?: any | null;
  }) {
    this.id = data?.id;
    this.source = data?.source;
    if (data?.zones) {
      for (const [key, value] of Object.entries(data?.zones)) {
        value.forEach((segment) => {
          const zone = new Zone({
            name: key,
            start: segment.start,
            end: segment.end,
          });
          this.zones.push(zone);
        });
      }
    }
    this.text = data?.text;
    this.textHighlight = data?.textHighlight;
    this.nac = data?.nac;
    this.updateDate = data?.update_date;
    this.visa = data?.visa;
    this.rapprochements = data?.rapprochements;
    this.toBeDeleted = data?.toBeDeleted ?? false;
    this.jurisdiction = data?.jurisdiction;
    this.chamber = data?.chamber;
    this.number = data?.number;
    this.numbers = data?.numbers;
    this.ecli = data?.ecli;
    this.formation = data?.formation;
    this.publication = data?.publication;
    this.decisionDate = data?.decision_date;
    this.type = data?.type;
    this.solution = data?.solution;
    this.solutionAlt = data?.solutionAlt;
    this.summary = data?.summary;
    this.bulletin = data?.bulletin;
    this.files = data?.files;
    this.themes = data?.themes;
    this.portalis = data?.portalis;
    this.forward = data?.forward;
    this.contested = data?.contested;
    this.timeline = data?.timeline;
    this.partial = data?.partial ?? false;
    this.legacy = data?.legacy;
  }

  get decisionDateAsObject(): Date {
    return new Date(this.decisionDate);
  }

  get formattedDecisionDate(): string {
    const date = new Date(this.decisionDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}

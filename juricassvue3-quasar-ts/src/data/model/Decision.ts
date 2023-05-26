class Decision {
  id!: string;
  source!: string;
  zones?: Map<string, ZoneSegment[]>;
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

  constructor(decision: Partial<Decision>) {
    Object.assign(this, decision);
  }

  get decisionDateAsObject(): Date {
    return new Date(this.decisionDate as string);
  }

  get formattedDecisionDate(): string {
    const date = new Date(this.decisionDate as string);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
}

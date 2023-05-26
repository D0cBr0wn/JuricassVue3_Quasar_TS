class DecisionLink {
  id!: string;
  url!: string;
  description!: string;
  theme!: string[];
  number!: string;

  constructor(decisionLink: Partial<DecisionLink>) {
    Object.assign(this, decisionLink);
  }
}

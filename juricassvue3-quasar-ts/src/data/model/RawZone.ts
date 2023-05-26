class RawZone {
  start: number;
  end: number;

  constructor(data: { start: number; end: number }) {
    this.start = data.start;
    this.end = data.end;
  }
}

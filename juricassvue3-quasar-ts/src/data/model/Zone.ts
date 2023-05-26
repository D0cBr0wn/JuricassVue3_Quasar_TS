class Zone {
  name: string | undefined;
  start: number | undefined;
  end: number | undefined;

  constructor(data: { name?: string; start?: number; end?: number } = {}) {
    this.name = data?.name;
    this.start = data?.start;
    this.end = data?.end;
  }
}

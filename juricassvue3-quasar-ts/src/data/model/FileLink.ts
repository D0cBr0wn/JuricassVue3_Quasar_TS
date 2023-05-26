class FileLink {
  id: string;
  url: string;
  type: string;
  label: string;

  constructor(id: string, url: string, type: string, label: string) {
    this.id = id;
    this.url = url;
    this.type = type;
    this.label = label;
  }
}

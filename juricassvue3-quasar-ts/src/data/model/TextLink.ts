class TextLink {
  id?: string | null;
  url?: string | null;
  title?: string | null;

  constructor(id?: string | null, url?: string | null, title?: string | null) {
    this.id = id;
    this.url = url;
    this.title = title;
  }
}

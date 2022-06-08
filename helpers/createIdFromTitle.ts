export function createIdFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

// this is an interesting title
// -> this-is-an-interesting-title

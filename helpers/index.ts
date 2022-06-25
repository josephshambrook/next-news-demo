// splits large array into smaller chunks of a preset max size
export const chunkArray = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
    : [arr];

// converts a string to dash-separated string
// this is an interesting title
// -> this-is-an-interesting-title
export function createIdFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

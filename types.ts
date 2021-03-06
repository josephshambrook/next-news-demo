export type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
  id: string;
};

export type Links = {
  current: string | null;
  next: string | null;
  previous: string | null;
};

import type { Post } from "./feed.types";

export async function fetchWeeklyPosts(): Promise<Post[]> {
  const fetchResul = await fetch("/weekly-popular-posts");
  const data = (await fetchResul.json()) as Post[];
  if (!data) return [];
  return data;
}

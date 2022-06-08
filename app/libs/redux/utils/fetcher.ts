import { ApiResponse } from "libs/types";

// TODO: move to .env
const BASE_API = "http://0.0.0.0:3333";

async function fetcher<T>(path: string): Promise<T | undefined> {
  try {
    const url = new URL(path, BASE_API);
    const response = await fetch(url.href);
    const json = (await response.json()) as ApiResponse<T>;
    if (!json.data) return undefined;
    return json.data;
  } catch (error) {
    //   Log error to Sentry maybe
    console.error("fetcher", error);
  }
}

export default fetcher;

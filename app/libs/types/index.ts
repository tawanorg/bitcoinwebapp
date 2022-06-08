export type TokenCollection = {
  key: string;
  token: string;
  name: string;
  currency: string;
  thumbnail: string;
};

export interface ApiResponse<T> {
  data: T | null;
  message?: string;
}

export interface GetTokenResponse {
  history: [string, number][];
  token: string;
  name?: string;
  currency: string;
  spot: {
    price: number;
    stamp: number;
  };
}

export interface GetStaticPropsContext<T> {
  params: T;
}

export interface Post {
  title: string;
  publish_date: string;
  thumbnail: string;
  excerpt: string;
  href: string;
}

export type ChartTimeFrame = "24 H" | "7 D" | "1 M";

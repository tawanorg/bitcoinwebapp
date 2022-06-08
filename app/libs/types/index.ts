export type TokenCollection = {
  key: string;
  symbol: string;
  name: string;
};

export interface ApiResponse<T> {
  data: T | null;
  message?: string;
}

export interface GetTokenResponse {
  history: any;
  prices: {
    usd: any;
  };
}

export interface GetStaticPropsContext<T> {
  params: T;
}

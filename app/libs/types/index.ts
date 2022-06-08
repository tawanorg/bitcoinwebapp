export type TokenCollection = {
  key: string;
  token: string;
  name: string;
  currency: string;
};

export interface ApiResponse<T> {
  data: T | null;
  message?: string;
}

export interface GetTokenResponse {
  history: any;
  token: string;
  currency: string;
  spot: {
    price: number;
    stamp: number;
  };
}

export interface GetStaticPropsContext<T> {
  params: T;
}

import { ApiResponse, GetTokenResponse } from "libs/types";

interface Props {
  token: string;
  currency: string;
}

export async function fetchTokenSlashCurrency({
  token,
  currency,
}: Props): Promise<ApiResponse<GetTokenResponse> | null> {
  const result = await fetch(`/api/token/${token}/${currency}`);
  const data = (await result.json()) as ApiResponse<GetTokenResponse>;
  if (!data) return null;
  return data;
}

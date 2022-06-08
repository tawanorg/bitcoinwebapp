import { ApiResponse, GetTokenResponse } from "libs/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { SAMPLE_COINS } from "../constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<GetTokenResponse>>
) {
  const getToken = async () => {
    if ("token" in req.query) {
      // Get correct token key in order to fetch correct token's data
      const _token = SAMPLE_COINS.find((d) => d.symbol === req.query.token);

      if (!_token) return null;

      // Get price history
      const fetchHistory = fetch(
        `https://index-api.bitcoin.com/api/v0/${_token.key}/history`
      );

      // Get spot price
      const fetchUsdSpot = fetch(
        `https://index-api.bitcoin.com/api/v0/${_token.key}/price/usd`
      );

      return await Promise.all([fetchHistory, fetchUsdSpot])
        .then(async (results) => ({
          history: await results[0].json(),
          prices: {
            usd: await results[1].json(),
          },
        }))
        .catch((error) => {
          // Log sentry
          console.error("Fetch history/spot price", error);
        });
    }

    return null;
  };

  const token = await getToken();

  if (!token)
    return res.status(204).json({
      data: null,
      message: "Token not found",
    });

  res.status(200).json({
    data: token,
  });
}

import { ApiResponse, GetTokenResponse } from "libs/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { SAMPLE_COINS } from "../../constants";

export default async function tokenSlashCurrency(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<GetTokenResponse>>
) {
  try {
    const token = "token" in req.query ? (req.query.token as string) : null;
    const currency =
      "currency" in req.query ? (req.query.currency as string) : null;

    if (!token || !currency) throw new Error("token or currency is empty");

    // Get correct token key in order to fetch correct token's data
    const _token = SAMPLE_COINS.find((d) => d.symbol === token);

    if (!_token) return null;

    // Get price history
    const fetchHistory = fetch(
      `https://index-api.bitcoin.com/api/v0/${_token.key}/history`
    );

    // Get spot price
    const fetchUsdSpot = fetch(
      `https://index-api.bitcoin.com/api/v0/${_token.key}/price/${currency}`
    );

    await Promise.all([fetchHistory, fetchUsdSpot])
      .then(async (results) => {
        const history = await results[0].json();
        const spot = await results[1].json();
        return { history, spot };
      })
      .then(({ history, spot }) => {
        const result: GetTokenResponse = {
          token,
          currency,
          history,
          spot,
        };
        res.status(200).json({
          data: result,
        });
      })
      .catch((error) => {
        console.error("error", error);
        new Error("Fetch history/spot price");
      });
  } catch (error) {
    console.error("error", error);
    // @ts-ignore
    res.status(500).json({ error: error.message });
  }
}

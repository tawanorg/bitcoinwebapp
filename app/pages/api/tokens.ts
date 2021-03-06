import { ApiResponse, TokenCollection } from "libs/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { SAMPLE_COINS } from "../utils/constants";

export default function allTokens(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<TokenCollection[]>>
) {
  res.status(200).json({
    data: SAMPLE_COINS,
  });
}

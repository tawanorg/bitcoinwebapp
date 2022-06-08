import { TokenSlashCurrency } from "./token.types";

const utils = {
  makeTokenKey: ({ token, currency }: TokenSlashCurrency) =>
    Object.values({ token, currency }).join("_").toUpperCase(),
};

export default utils;

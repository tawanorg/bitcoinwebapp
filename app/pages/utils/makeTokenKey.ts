import { TokenSlashCurrency } from "libs/redux/engine/token/token.types";

const makeTokenKey = ({ token, currency }: TokenSlashCurrency) =>
  Object.values({ token, currency }).join("_").toUpperCase();

export default makeTokenKey;

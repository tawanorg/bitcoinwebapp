import { DefaultTheme } from "styled-components";

export type ThemeNames = "minimal";

export const minimal: DefaultTheme = {
  fonts: {
    heading: '"Inter", Arial, Helvetica Neue, sans-serif',
    body: '"Poppins", Arial, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
    mono: "Consolas, monaco, monospace",
  },
  page: {
    background: "#111111",
  },
  colors: {
    primary: "#f91283",
    secondary: "#948193",
  },
};

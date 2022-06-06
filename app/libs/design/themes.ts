import { DefaultTheme } from "styled-components";

export type ThemeNames = "minimal";

export const minimal: DefaultTheme = {
  fonts: {
    heading: '"Inter", Arial, Helvetica Neue, sans-serif',
    body: '"Poppins", Arial, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
    mono: "Consolas, monaco, monospace",
  },
  spacing: 8,
  page: {
    background: "#111",
    border: "#ccc",
  },
  shadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  colors: {
    primary: "#0D1527",
    highlight: "#f91283",
    secondary: "#948193",
  },
};

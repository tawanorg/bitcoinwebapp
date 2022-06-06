import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.styles";
import ResetStyles from "./styles/reset.styles";
import * as themes from "./themes";

type Props = PropsWithChildren<{ theme?: themes.ThemeNames }>;

const DesignProvider = ({ children, theme = "minimal" }: Props) => {
  const getTheme = (name: themes.ThemeNames) => {
    if (name in themes) {
      return themes[name];
    }
    return themes.minimal;
  };

  const currentTheme = getTheme(theme);

  return (
    <>
      <ResetStyles />
      <ThemeProvider theme={currentTheme}>
        <>
          <GlobalStyles />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

export default DesignProvider;

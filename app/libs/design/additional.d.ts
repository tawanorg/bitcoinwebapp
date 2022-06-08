// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface ThemeProps<T> {
    theme: T;
  }
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      mono: string;
    };
    spacing: number;
    page: {
      background: string;
      border: string;
    };
    shadow: string;
    colors: {
      primary: string;
      highlight: string;
      secondary: string;
    };
  }
}

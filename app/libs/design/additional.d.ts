// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
      mono: string;
    };
    page: {
      background: string;
    };
    colors: {
      primary: string;
      secondary: string;
    };
  }
}

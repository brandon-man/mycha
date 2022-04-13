// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {},
  fonts: {
    ...chakraTheme.fonts,
    body: "Raleway",
    heading: "Asap",
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  breakpoints: {
    sm: "30em",
    md: "55em",
    lg: "84em",
    xl: "96em",
    "2xl": "120em",
  },
});

const theme = extendTheme(customTheme);

export default theme;

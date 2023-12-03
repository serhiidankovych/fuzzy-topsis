import React from "react";

import {
  alpha,
  getContrastRatio,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import Container from "@mui/material/Container";

export default function ThemeContainer({ dashboard }) {
  const blueBase = "#0081ff";
  const greenMain = alpha(blueBase, 1);

  let darkTheme = createTheme({
    palette: {
      mode: "dark",

      secondary: {
        main: "#c0c0c0",
      },

      text: {
        primary: "#f0f0f0",
        secondary: "#c0c0c0",
      },
      green: {
        main: greenMain,
        light: alpha(blueBase, 0.5),
        dark: alpha(blueBase, 0.9),
        contrastText:
          getContrastRatio(greenMain, "#fff") > 4.5 ? "#fff" : "#111",
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root.Mui-focused": {
              color: "#c0c0c0",
            },
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "3px",
            whiteSpace: "nowrap",
          },
        },
      },

      MuiTabPanel: {
        styleOverrides: { root: { padding: 0 } },
      },
      MuiTabsIndicatorSpan: {
        styleOverrides: {
          root: {
            backgroundColor: "#c0c0c0",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: " rgba(18,18,18,0.3)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          },
        },
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  darkTheme = responsiveFontSizes(darkTheme);

  const backgroundStyles = {
    backgroundColor: "#0f0f0f",
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg"> {dashboard}</Container>
    </ThemeProvider>
  );
}

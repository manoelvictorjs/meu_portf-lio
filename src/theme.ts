import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#373740",
    },
    secondary: {
      main: "#738CBF",
    },
    background: {
      default: 'linear-gradient(135deg, #011C26 10%, #033F73 40%, #011C26 90%)', // Gradiente suave
      paper: "#ffffff", // Cor de fundo para componentes como Paper/Card
    },
  },
  typography: {
    fontFamily: "Adobe Caslon Pro Regular",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #011C26 10%, #033F73 40%, #011C26 90%)',
          backgroundAttachment: "fixed", // Fixa o gradiente ao rolar
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

// Aplica responsividade na tipografia
theme = responsiveFontSizes(theme);

export default theme;

import { createTheme, responsiveFontSizes } from "@mui/material";

let  theme = createTheme({
  palette: {
    primary: {
      main: '#373740',
    },
    secondary: {
      main: "#738CBF"
    },
  },
  typography : {
    fontFamily:"Adobe Caslon Pro Regular "
  
  }
  }
);

theme = responsiveFontSizes (theme);
export default theme;

import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/minhafoto.jpeg";
import Grid2 from "@mui/material/Grid2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter";

const Hero = () => {
  const SyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(12),
    },
  }));

  const SyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "350px",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.main}`,
    margin: "0 auto",
    display: "block",
    position: "relative",
    zIndex: 1,
  }));

  return (
    <>
      <SyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={4}>
            <Grid2 item xs={12} md={5}>
              <Box position="relative" pb={3}>
                <Box position="absolute" width={"150%"} top={-80} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <SyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                pb={2}
                textAlign="center"
              >
                Manoel Victor
              </Typography>
              <Typewriter
                text="Óla Sou Dev Back-End"
                delay={120}
                variant="h2"
                color="primary.contrastText"
              />
              <Box mt={3}></Box>
              <Grid2
                container
                display="flex"
                justifyContent="center"
                spacing={3}
              >
                <Grid2 item xs={10} md={4}>
                  <StyledButton onClick={()=> console.log("download")}>
                    <CloudDownloadIcon />
                    <Typography>Meu currículo</Typography>
                  </StyledButton>
                </Grid2>
                <Grid2 item xs={10} md={4}>
                  <StyledButton onClick={()=> console.log("download")}>
                    <MailIcon />
                    <Typography>Entre em contato</Typography>
                  </StyledButton>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </SyledHero>
    </>
  );
};

export default Hero;

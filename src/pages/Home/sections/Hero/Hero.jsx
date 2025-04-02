import { Box, Container, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/minhafoto.jpeg";
import Grid2 from "@mui/material/Grid2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import MailIcon from "@mui/icons-material/Mail";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const SyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const SyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <SyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 5 }} textAlign={"center"}>
              <SyledImg src={Avatar} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Manoel Victor
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                Sou Dev Back-End
              </Typography>
              <Grid2
                container
                display="flex"
                justifyContent="center"
                spacing={3}
              >
                <Grid2 item xs={12} md={6}>
                  <StyledButton>
                    <CloudDownloadIcon />
                    <Typography>Meu currículo</Typography>
                  </StyledButton>
                </Grid2>
                <Grid2 item xs={12} md={4}>
                  <StyledButton>
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

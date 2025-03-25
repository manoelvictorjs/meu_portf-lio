import { Container, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/imagens/minhafoto.jpeg";
import Grid2 from "@mui/material/Grid2";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import MailIcon from "@mui/icons-material/Mail";

const Hero = () => {
  const SyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const SyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <SyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <SyledImg src={Avatar} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign="center">Manoel Victor</Typography>
              <Typography color="primary" variant="h2" textAlign="center">Sou Dev Back-End</Typography>
              <Grid2 container sx={{display:"flex", justifyContent:"center"}}>
                <Grid2 item xs={12} md={6} >
                  <Button>
                    <CloudDownloadIcon />
                    Meu currículo
                  </Button>
                </Grid2>
                <Grid2 item xs={12} md={4}>
                  <Button>
                    <MailIcon />
                    Entre em contato
                  </Button>
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

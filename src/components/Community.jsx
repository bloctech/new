import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@material-ui/core";
import bg from "../images/community-bg.png";

function Community() {
  const matches = useMediaQuery("(max-width:960px)");
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box
          position="absolute"
          fontSize="122px"
          fontFamily="700"
          fontFamily="Lato"
          top="10%"
        >
          <Box color="#6100BF" pl={2}>
            People make
          </Box>
          <Box color="#fff" pl={2}>
            it happen
          </Box>
        </Box>
        <Box
          mt={15}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: " #cccccc09",
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Grid container>
          <Grid item xs={11} sm={11} md={6}>
            <Box>
              <Box color="#48007C">Lets Join Our Network Community</Box>
              <Box fontSize="20px">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={11} sm={11} md={6}>
            <Box
              borderRadius="28px"
              height={matches ? "auto" : "461px"}
              style={{
                background: "linear-gradient(180deg, #48007C 0%, #6100BF 100%)",
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Community;

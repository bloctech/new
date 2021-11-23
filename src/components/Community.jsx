import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import bg from "../images/community-bg.png";

function Community() {
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
            </Box>
          </Grid>
          <Grid item xs={11} sm={11} md={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Community;

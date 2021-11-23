import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import homeHeroBg from "../images/home_hero_bg.png";

function About() {
  return (
    <>
      <Box mt={9}>
        <Container maxWidth="lg">
          <Box
            style={{
              backgroundImage: `url(${homeHeroBg})`,
              backgroundColor: " #cccccc09",
              height: "500px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Box mt={4} fontWeight="700">
            Build without compromise
          </Box>
          <Box mt={2} fontWeight="400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default About;

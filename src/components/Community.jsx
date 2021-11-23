import React from "react";
import { Box, Container, Grid, useMediaQuery } from "@material-ui/core";
import bg from "../images/community-bg.png";
import { BsTelegram, BsYoutube, BsFacebook, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import linkedin from "../images/linkedin.png";

function Community() {
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:600px)");
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
          mb={15}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: " #cccccc09",
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        <Grid container style={{ justifyContent: "space-around" }}>
          <Grid item xs={11} sm={11} md={4}>
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
          <Grid item xs={12} sm={12} md={6}>
            <Box
              width="602px"
              mt={matches ? 5 : 0}
              borderRadius="28px"
              height={matches1 ? "400px" : "461px"}
              style={{
                background: "linear-gradient(180deg, #48007C 0%, #6100BF 100%)",
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container style={{ justifyContent: "center" }}>
                <Grid
                  item
                  xs={12}
                  sm={11}
                  md={11}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      width={matches1 ? "38px" : "47.04px"}
                      height={matches1 ? "38px" : "47.04px"}
                      src={linkedin}
                      alt=""
                    />
                  </Box>
                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BsTelegram
                      fontSize={matches1 ? "38px" : "47.04px"}
                      color="#fff"
                    />
                  </Box>

                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BsFacebook
                      fontSize={matches1 ? "38px" : "47.04px"}
                      color="#fff"
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={11}
                  md={11}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "25px",
                  }}
                >
                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <AiFillTwitterCircle
                      fontSize={matches1 ? "38px" : "47.04px"}
                      color="#fff"
                    />
                  </Box>
                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BsReddit
                      fontSize={matches1 ? "38px" : "47.04px"}
                      color="#fff"
                    />
                  </Box>

                  <Box
                    width={matches1 ? "90px" : "115px"}
                    height={matches1 ? "90px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BsYoutube
                      fontSize={matches1 ? "38px" : "47.04px"}
                      color="#fff"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Community;

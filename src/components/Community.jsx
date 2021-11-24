import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Button,
  CardMedia,
} from "@material-ui/core";
import bg from "../images/community-bg.png";
import { BsTelegram, BsYoutube, BsFacebook, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import linkedin from "../images/linkedin.png";
import { makeStyles } from "@material-ui/core/styles";
import Skateboarding from "../videos/Skateboarding.mp4";

const useStyles = makeStyles({
  hover: {
    fontWeight: "700",
    fontFamily: "Lato",
    fontSize: "20px",
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#AD00FF",
    },
  },
  btn: {
    background:
      "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
    width: "168px",
    height: "45px",
    borderRadius: "36px",
    textTransform: "capitalize",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
  },
});
function Community() {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:680px)");
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);
  const handleToggle = (a) => {
    if (a === "first") {
      console.log(a);
      setState1(!state1);
    } else if (a === "second") {
      setState2(!state2);
    } else if (a === "third") {
      setState3(!state3);
    }
  };
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box
          position="absolute"
          fontSize={matches1 ? "55px" : "122px"}
          fontFamily="700"
          top={matches1 ? "20%" : "10%"}
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
          <Grid item xs={11} sm={11} md={5}>
            <Box>
              <Box
                fontSize={matches1 ? "50px" : "72px"}
                fontWeight="900"
                color="primary.main"
                textAlign={matches1 ? "center" : "left"}
              >
                Lets Join Our Network Community
              </Box>
              <Box
                fontSize="20px"
                width={matches ? "auto" : "426px"}
                fontWeight="400"
                mt={1}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              width={matches ? "auto" : "602px"}
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
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#linkedin"
                      target="_blank"
                      className={classes.hover}
                    >
                      <img
                        width={matches1 ? "35px" : "47.04px"}
                        height={matches1 ? "35px" : "47.04px"}
                        src={linkedin}
                        alt=""
                      />
                    </a>
                  </Box>
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#telegram"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsTelegram
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>

                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="#facebook"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsFacebook
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
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
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a
                      href="#twitter"
                      target="_blank"
                      className={classes.hover}
                    >
                      <AiFillTwitterCircle
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>
                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a href="#reddit" target="_blank" className={classes.hover}>
                      <BsReddit
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>

                  <Box
                    width={matches1 ? "80px" : "115px"}
                    height={matches1 ? "80px" : "115px"}
                    borderRadius="16px"
                    border="1px solid #FFFFFF"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                  >
                    <a
                      href="#youtube"
                      target="_blank"
                      className={classes.hover}
                    >
                      <BsYoutube
                        fontSize={matches1 ? "35px" : "47.04px"}
                        color="#fff"
                      />
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Box mt={10} pt={5}>
          <Box
            fontSize={matches1 ? "50px" : "72px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Build from within
          </Box>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Run a node
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Plugin</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Chain Relay
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Bond Now</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  DAO
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Join the DAO</Button>
              </Box>
            </Grid>
          </Grid>

          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Content creator
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Moderator
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              md={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                mt={5}
                width="364px"
                height={matches1 ? "auto" : "380px"}
                bgcolo="#FFF"
                boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                borderTop="6px solid #8800FF"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={(2, 4, 2, 4)}
              >
                <Box fontSize="24px" fontWeight="700" color="primary.main">
                  Community leader
                </Box>
                <Box
                  fontSize="18px"
                  fontWeight="400"
                  textAlign="center"
                  mt={2}
                  mb={4}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </Box>
                <Button className={classes.btn}>Apply Today</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={15} pt={5}>
          <Box
            fontSize={matches1 ? "50px" : "72px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Watch with us
          </Box>
          <Grid
            container
            spacing={matches ? 0 : 5}
            style={{ justifyContent: "center" }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
          </Grid>

          <Grid
            spacing={matches ? 0 : 5}
            container
            style={{ justifyContent: "center", marginTop: "20px" }}
          >
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
            <Grid
              item
              xs={11}
              sm={11}
              md={4}
              style={{ justifyContent: "center", marginTop: "20px" }}
            >
              <CardMedia
                component="video"
                className={classes.media}
                width={matches ? "90%" : "90%"}
                image={Skateboarding}
                controls
                // autoPlay
              />
            </Grid>
          </Grid>
        </Box>

        <Box mt={15} mb={8} pt={5}>
          <Box
            fontSize="48px"
            fontWeight="900"
            color="primary.main"
            textAlign="center"
          >
            Get App
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              fontSize="24px"
              fontWeight="400"
              textAlign="center"
              mt={2}
              mb={5}
              width={matches ? "auto" : "880px"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Box>
          </Box>

          <Box>
            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state1 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Key concepts
                </Box>
                {state1 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("first");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("first");
                    }}
                  />
                )}
              </Box>
              <Box display={state1 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>

            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state2 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Wallets
                </Box>
                {state2 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("second");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("second");
                    }}
                  />
                )}
              </Box>
              <Box display={state2 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>

            <Box
              bgcolor="#FFFFFF"
              boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
              height={state3 ? "95px" : "auto"}
              p={5}
              mt={3}
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  fontSize={{ xs: "20px", sm: "24px" }}
                  fontWeight="900"
                  color="primary.main"
                >
                  Exchanges
                </Box>
                {state3 ? (
                  <AiOutlinePlus
                    color="#AD00FF"
                    fontSize="24px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("third");
                    }}
                  />
                ) : (
                  <RiSubtractLine
                    color="#AD00FF"
                    fontSize="30px"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleToggle("third");
                    }}
                  />
                )}
              </Box>
              <Box display={state3 ? "none" : "block"}>
                <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
                <Button className={classes.btn}>Stay Safe</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Community;

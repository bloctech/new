import React, { useState } from "react";
import bg from "../images/build-bg.png";
import { Box, Container, Grid, useMediaQuery, Button } from "@material-ui/core";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../images/arrow.png";

const useStyles = makeStyles({
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

function Build() {
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:680px)");
  const classes = useStyles();
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);
  const [state4, setState4] = useState(true);
  const handleToggle = (a) => {
    if (a === "first") {
      console.log(a);
      setState1(!state1);
    } else if (a === "second") {
      setState2(!state2);
    } else if (a === "third") {
      setState3(!state3);
    } else if (a === "forth") {
      setState4(!state4);
    }
  };
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box
          position="absolute"
          fontSize={matches1 ? "60px" : "122px"}
          fontFamily="700"
          top={matches1 ? "20%" : "10%"}
        >
          <Box color="#6100BF" pl={2}>
            Build Smart
          </Box>
          <Box color="#fff" pl={2}>
            with Pact
          </Box>
        </Box>
        <Box
          mt={15}
          mb={8}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: " #cccccc09",
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box>
          <Box
            fontSize={matches1 ? "40px" : "72px"}
            fontWeight="900"
            color="primary.main"
            textAlign={matches1 ? "center" : "left"}
            mb={8}
          >
            Build without compromise
          </Box>
          <Grid container style={{ justifyContent: matches ? "center" : "" }}>
            <Grid item xs={11} sm={11} md={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    width="364px"
                    height="auto"
                    background="#FFFFFF"
                    boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                    borderTop="6px solid #8800FF"
                    p={5}
                  >
                    <Box fontSize="24px" fontWeight="700" color="primary.main">
                      DeFi
                    </Box>
                    <Box fontSize="18px" fontWeight="400" mt={1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: matches ? "20px" : "0px",
                  }}
                >
                  <Box
                    width="364px"
                    height="auto"
                    background="#FFFFFF"
                    boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                    borderTop="6px solid #8800FF"
                    p={5}
                  >
                    <Box fontSize="24px" fontWeight="700" color="primary.main">
                      NFT
                    </Box>
                    <Box fontSize="18px" fontWeight="400" mt={1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            style={{
              justifyContent: matches ? "center" : "",
              marginTop: "20px",
            }}
          >
            <Grid item xs={11} sm={11} md={8}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    width="364px"
                    height="auto"
                    background="#FFFFFF"
                    boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                    borderTop="6px solid #8800FF"
                    p={5}
                  >
                    <Box fontSize="24px" fontWeight="700" color="primary.main">
                      Interop
                    </Box>
                    <Box fontSize="18px" fontWeight="400" mt={1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: matches ? "20px" : "0px",
                  }}
                >
                  <Box
                    width="364px"
                    height="auto"
                    background="#FFFFFF"
                    boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
                    borderTop="6px solid #8800FF"
                    p={5}
                  >
                    <Box fontSize="24px" fontWeight="700" color="primary.main">
                      Multi-protocol
                    </Box>
                    <Box fontSize="18px" fontWeight="400" mt={1}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={12}
            mb={8}
          >
            Getting started is simple
          </Box>
          <Box
            bgcolor="#FFFFFF"
            boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
            height={state1 ? "95px" : "auto"}
            p={matches1 ? 3.5 : 5}
            mt={3}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight="900"
                color={state1 ? "#000" : "primary.main"}
              >
                Quickstart
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
                <br /> industry's standard dummy text ever since the 1500s.
              </Box>
              <Button className={classes.btn}>Start Now</Button>
            </Box>
          </Box>

          <Box
            bgcolor="#FFFFFF"
            boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
            height={state2 ? "95px" : "auto"}
            p={matches1 ? 3.5 : 5}
            mt={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight="900"
                color={state2 ? "#000" : "primary.main"}
              >
                Explore dApp templates
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br />
                industry's standard dummy text ever since the 1500s.
              </Box>
              <Button className={classes.btn}>Start Now</Button>
            </Box>
          </Box>

          <Box
            bgcolor="#FFFFFF"
            boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
            height={state3 ? "95px" : "auto"}
            p={matches1 ? 3.5 : 5}
            mt={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight="900"
                color={state3 ? "#000" : "primary.main"}
              >
                View the source
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br /> industry's standard
                dummy text ever since the 1500s.
              </Box>
              <Button className={classes.btn}>Start Now</Button>
            </Box>
          </Box>

          <Box
            bgcolor="#FFFFFF"
            boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
            height={state4 ? "95px" : "auto"}
            p={matches1 ? 3.5 : 5}
            mt={3}
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                fontSize={{ xs: "20px", sm: "24px" }}
                fontWeight="900"
                color={state4 ? "#000" : "primary.main"}
              >
                Get the tools
              </Box>
              {state3 ? (
                <AiOutlinePlus
                  color="#AD00FF"
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleToggle("forth");
                  }}
                />
              ) : (
                <RiSubtractLine
                  color="#AD00FF"
                  fontSize="30px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleToggle("forth");
                  }}
                />
              )}
            </Box>
            <Box display={state4 ? "none" : "block"}>
              <Box fontSize="18px" fontWeight="400" mt={2} mb={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br /> industry's standard
                dummy text ever since the 1500s.
              </Box>
              <Button className={classes.btn}>Start Now</Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={15}
            mb={8}
          >
            Case study
          </Box>
          <Box
            height="auto"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            borderTop="6px solid #8800FF"
            p={7}
          >
            <Box fontSize="28px" fontWeight="900" color="primary.main" mt={2}>
              Rapid launch
            </Box>
            <Box
              fontSize="18px"
              fontWeight="400"
              mt={1}
              width={matches ? "auto" : "73%"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Box>

            <Box fontSize="28px" fontWeight="900" color="primary.main" mt={7}>
              A smart contract first
            </Box>
            <Box
              fontSize="18px"
              fontWeight="400"
              mt={1}
              width={matches ? "auto" : "73%"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Box>

            <Box fontSize="28px" fontWeight="900" color="primary.main" mt={7}>
              Powered by Pact
            </Box>
            <Box
              fontSize="18px"
              fontWeight="400"
              mt={1}
              mb={7}
              width={matches ? "auto" : "73%"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Box>
            <Box display="flex" justifyContent="center" mt={3}>
              <Button
                className={classes.btn}
                style={{ fontSize: "18px", fontWeight: "700" }}
              >
                Visit Site
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={15}
            mb={8}
          >
            Build your best ideas with us
          </Box>
          <Grid container spacing={matches ? 0 : 5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                bgcolor="#FFFFFF"
                boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
                height={matches ? "auto" : "242px"}
                borderTop="6px solid #8800FF"
                p={5}
                mt={3}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box fontSize="24px" fontWeight="700" color="primary.main">
                    Developer program
                  </Box>
                  <img
                    src={arrow}
                    width={matches1 ? "30px" : "auto"}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </Box>

                <Box
                  fontSize="18px"
                  fontWeight="400"
                  width={matches ? "auto" : "419px"}
                  mt={1}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                bgcolor="#FFFFFF"
                boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
                height={matches ? "auto" : "242px"}
                borderTop="6px solid #8800FF"
                p={5}
                mt={3}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box fontSize="24px" fontWeight="700" color="primary.main">
                    Technical grants
                  </Box>
                  <img
                    src={arrow}
                    width={matches1 ? "30px" : "auto"}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </Box>

                <Box
                  fontSize="18px"
                  fontWeight="400"
                  width={matches ? "auto" : "419px"}
                  mt={1}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={matches ? 0 : 5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                bgcolor="#FFFFFF"
                boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
                height={matches ? "auto" : "242px"}
                borderTop="6px solid #8800FF"
                p={5}
                mt={3}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box fontSize="24px" fontWeight="700" color="primary.main">
                    Developer community
                  </Box>
                  <img
                    src={arrow}
                    width={matches1 ? "30px" : "auto"}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </Box>

                <Box
                  fontSize="18px"
                  fontWeight="400"
                  width={matches ? "auto" : "419px"}
                  mt={1}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                bgcolor="#FFFFFF"
                boxShadow=" 0px 0px 28px rgba(0, 0, 0, 0.25)"
                height={matches ? "auto" : "242px"}
                borderTop="6px solid #8800FF"
                p={5}
                mt={3}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box fontSize="24px" fontWeight="700" color="primary.main">
                    Share a proposal
                  </Box>
                  <img
                    src={arrow}
                    width={matches1 ? "30px" : "auto"}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </Box>

                <Box
                  fontSize="18px"
                  fontWeight="400"
                  width={matches ? "auto" : "419px"}
                  mt={1}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={15}
            mb={8}
          >
            Here's what you'll need
          </Box>
          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              color="primary.main"
            >
              ReadTheDocs
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Developer tutorials
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Pact on Github
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Install Pact on Atom
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Code samples
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box fontSize={matches1 ? "14px" : "24px"} fontWeight="900">
              Articles
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>
        </Box>

        <Box>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={15}
            mb={8}
          >
            Tutorial & guides
          </Box>
          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              color="primary.main"
            >
              Developer Quickstart
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Pact tutorials
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Teaches
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Guides to accounts & keysets
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Getting started with transfers
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>
        </Box>

        <Box mb={10}>
          <Box
            fontSize={matches1 ? "40px" : "48px"}
            fontWeight="900"
            color="primary.main"
            textAlign="center"
            mt={15}
            mb={8}
          >
            Here's what you'll need
          </Box>
          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              color="primary.main"
            >
              Chainweaver (wallet & workbench)
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Chainweaver macOS
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Chainweaver Linux
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Chainweaver Windows
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              //  color="primary.main"
            >
              Chainweaver user guide
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Atom IDE
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Block explorer
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box
              fontSize={matches1 ? "14px" : "24px"}
              fontWeight="900"
              // color="primary.main"
            >
              Web transfer tools
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>

          <Box
            height="98px"
            background="#FFFFFF"
            boxShadow="0px 0px 11px rgba(0, 0, 0, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={4}
            pr={4}
            mt={3}
          >
            <Box fontSize={matches1 ? "14px" : "24px"} fontWeight="900">
              Balance checker
            </Box>
            <img
              src={arrow}
              width={matches1 ? "30px" : "auto"}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Build;

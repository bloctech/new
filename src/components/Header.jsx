import React from "react";
import {
  Box,
  Container,
  Hidden,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
// import soliditylogo from "../images/solidity audit.svg";
import { Link as LinkR, NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import { useWeb3React } from "@web3-react/core";
// import { defaultAddress } from "../utils";
import Routes from "../Routes";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#fff",
    justifyContent: "center",
  },
  hover: {
    fontWeight: "700",
    fontFamily: "Lato",
    fontSize: "20px",
    color: "#000",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#AD00FF",
      textDecoration: "underline",
    },
  },
});

function Header(props) {
  //   const { account, active, activate, deactivate } = useWeb3React();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const [openmenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };
  const activeRoute = (routeName) => {
    return props.history === routeName ? true : false;
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenMenu(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Routes.map((prop, key) => (
          <NavLink
            to={prop.path}
            key={key}
            style={{
              textDecoration: "none",
              color: "#48007C",
              fontStyle: "normal",
            }}
          >
            <ListItem
              selected={activeRoute(prop.path)}
              button
              style={{ borderBottom: "1px solid #eee" }}
              key={prop.sidebarName}
            >
              <ListItemText
                style={{ textAlign: "center" }}
                primary={prop.sidebarName}
              />
            </ListItem>
          </NavLink>
        ))}
      </List>
      {/* <List>
        {["about", "build", "roadmap", "Community"].map((text, index) => {
          if (text === "about") {
            <ListItem
              button
              style={{
                justifyContent: "center",
                borderBottom: "1px solid #bbb8b8",
              }}
              key={text}
            >
              <LinkR to="/" className={classes.hover}>
                <ListItemText
                  style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    color: "#48007C",
                  }}
                  primary={text}
                />
              </LinkR>
            </ListItem>;
          } else {
            <ListItem
              button
              style={{
                justifyContent: "center",
                borderBottom: "1px solid #bbb8b8",
              }}
              key={text}
            >
              <LinkR to={text} className={classes.hover}>
                <ListItemText
                  style={{
                    textTransform: "capitalize",
                    textAlign: "center",
                    color: "#48007C",
                  }}
                  primary={text}
                />
              </LinkR>
            </ListItem>;
          }
        })}
      </List> */}
    </div>
  );

  return (
    <Box style={{ background: "transparent", zIndex: "100px" }} height="92px">
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexBasis="40%"
          >
            <Box>
              <LinkR to="/">
                <Box
                  fontSize="24px"
                  fontWeight="700"
                  style={{
                    background:
                      "linear-gradient(180deg, #6300C6 0%, #AD00FF 100%)",
                    webkitBackgroundClip: "text",
                    webkitTextFillColor: "transparent",
                  }}
                >
                  Logo here
                </Box>

                {/* <img src={soliditylogo} width="227px" alt="not found" /> */}
              </LinkR>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent={matches1 ? "end" : "space-between"}
            alignItems="center"
            flexBasis={matches1 ? "45px" : "58%"}
          >
            <Hidden mdDown>
              <Box>
                <LinkR to="/" className={classes.hover}>
                  About
                </LinkR>
              </Box>

              <Box>
                <LinkR to="build" className={classes.hover}>
                  Build
                </LinkR>
              </Box>

              <Box>
                <LinkR to="roadmap" className={classes.hover}>
                  RoadMap
                </LinkR>
              </Box>

              <Box>
                <LinkR to="community" className={classes.hover}>
                  Community
                </LinkR>
              </Box>
            </Hidden>
            <Button
              style={{
                background:
                  "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
                display: matches ? "none" : "block",
                fontSize: "20px",
                fontWeight: "700",
                borderRadius: "36px",
                width: "160px",
                height: "45px",
                color: "#fff",
                border: "none",
                textTransform: "capitalize",
              }}
            >
              <a
                href="#doc"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                Docs
              </a>
            </Button>
            <Hidden mdUp>
              <IconButton>
                {["top"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "#48007C",
                        }}
                      ></MenuIcon>
                    </Button>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                    {/* <Drawer anchor={anchor} classes={{ paper: classes.paper }} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer> */}
                  </React.Fragment>
                ))}
              </IconButton>
            </Hidden>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;

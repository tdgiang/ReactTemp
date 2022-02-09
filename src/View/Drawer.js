import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import colors from "../assets/Color";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  ListItemIcon,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import "./Drawer.css";
import KEY from "../assets/Key";
import Popper from "../Component/Popper/Popper";
import DrawerBar from "../Component/DrawerBar";
import { Link } from "react-router-dom";
import Notification from "../Component/Notification";
import NotificationBar from "../Component/NotificationBar/NotificationBar";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6),
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.main,

    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 40,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: colors.main }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to={"/home"}
            >
              <h2>Web Template</h2>
            </Link>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ListItemIcon
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                {/* <Notification /> */}
                <NotificationBar />

                <Popper />
                <div>
                  <Typography
                    style={{ textAlign: "center", color: "white" }}
                    variant="caption"
                    noWrap
                  >
                    {localStorage.getItem(KEY.NAMEUSER)}
                  </Typography>
                </div>
              </ListItemIcon>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <Backdrop
          className={classes.backdrop}
          open={props.modalLoading.isVisible}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {props.children}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    modalLoading: state.ModalLoadingReducer,
  };
};
export default connect(mapStateToProps, {})(MiniDrawer);

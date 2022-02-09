import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import colors from "../assets/Color";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Collapse,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ExpandMore from "@material-ui/icons/ExpandMore";
import KEY from "../assets/Key";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./Drawer.css";
import ListDrawers from "../config/ListDrawers";
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
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
  const { open, handleDrawerClose } = props;
  const [data, setData] = useState([]);
  const [listPermission, setPermission] = useState([]);

  useEffect(() => {
    let temp = localStorage.getItem(KEY.PERMISSIONS);
    let permission = JSON.parse(temp);
    if (permission?.length > 0) {
      const newList = ListDrawers.map((item) => {
        //level 2
        if (item.menus) {
          let flag = false;
          let arrChild = item.menus.map((child) => {
            if (
              permission.findIndex((temp) => temp.function_code == child.id) !=
              -1
            ) {
              flag = true;
              return { ...child, hide: false };
            }
            return child;
          });
          if (flag) return { ...item, hide: false, menus: arrChild };
          return item;
        } else {
          //level 1
          if (
            permission.findIndex((temp) => temp.function_code == item.id) != -1
          )
            return { ...item, hide: false };
          return item;
        }
      });
      setPermission(newList);
    }
  }, []);
  useEffect(() => {
    setData(listPermission);
  }, [listPermission]);
  const location = useLocation();
  const handeleShowList = (id) => {
    const newPage = data.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      } else {
        return item;
      }
    });
    setData(newPage);
  };

  const activeClass = (route, route1, route2) => {
    if (
      location.pathname == route ||
      location.pathname == route1 ||
      location.pathname == route2
    ) {
      return "activeMenu";
    }
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <div />
        {open ? (
          <h3 style={{ color: "white", textAlign: "center" }}>Logo</h3>
        ) : null}
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon style={{ color: "white" }} />
          ) : (
            <ChevronLeftIcon style={{ color: "white" }} />
          )}
        </IconButton>
      </div>
      <Divider />
      <List style={{ textTransform: "capitalize" }}>
        {data.map((item) => {
          if (item.menus && !item.hide)
            return (
              <>
                <div
                  key={item.id}
                  underline="hover"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem
                    button
                    key={item.id}
                    className={activeClass(`${item.link}`)}
                    onClick={() => handeleShowList(item.id)}
                  >
                    <ListItemIcon className={activeClass(`${item.link}`)}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.active ? <KeyboardArrowLeftIcon /> : <ExpandMore />}
                  </ListItem>
                  {item.active &&
                    item.menus?.map((value) => {
                      if (!value.hide) {
                        return (
                          <Collapse
                            in={item.active}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <Link
                                key={value.id}
                                to={value.link}
                                underline="hover"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <ListItem
                                  button
                                  key={value.id}
                                  className={activeClass(`${value.link}`)}
                                >
                                  <ListItemIcon
                                    className={activeClass(`${value.link}`)}
                                  >
                                    {value.icon}
                                  </ListItemIcon>
                                  <ListItemText primary={value.name} />
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                        );
                      }
                    })}
                  <Divider />
                </div>
              </>
            );
          else if (!item.hide) {
            return (
              <Link
                key={item.id}
                to={item.link}
                underline="hover"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem
                  button
                  key={item.id}
                  className={activeClass(`${item.link}`)}
                >
                  <ListItemIcon className={activeClass(`${item.link}`)}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            );
          }
        })}
      </List>
    </Drawer>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    modalLoading: state.ModalLoadingReducer,
  };
};
export default connect(mapStateToProps, {})(MiniDrawer);

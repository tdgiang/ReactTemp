import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Popover,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link, useHistory } from "react-router-dom";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import KEY from "../assets/Key";
import { apiLogout } from "../apis/Functions/users";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../actions/loadingAction";
import { connect } from "react-redux";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  root: {
    width: 250,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        style={{ color: "white" }}
        onClick={handleClick}
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List className={classes.root}>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
          <p>hdsadh</p>
        </List>
      </Popover>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};
export default connect(mapStateToProps, {
  showLoading,
  hideLoading,
})(SimplePopover);

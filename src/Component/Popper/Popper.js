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
import KEY from "../../assets/Key";
import AvatarUser from "../../assets/images/avatar.jpg";
import { apiLogout } from "../../apis/Functions/users";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function SimplePopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { enqueueSnackbar } = useSnackbar();
  let history = useHistory();

  const [avatart, setAvatart] = useState(localStorage.getItem(KEY.AVATAR));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setAvatart(localStorage.getItem(KEY.AVATAR));
  }, [props.user]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logout = async () => {
    props.showLoading();
    const res = await apiLogout({});
    props.hideLoading();
    if (res.data.code == 200) {
      localStorage.removeItem(KEY.API_TOKEN);
      localStorage.removeItem(KEY.AVATAR);
      history.push("/");
    } else if (res.status == 401) {
      localStorage.removeItem(KEY.API_TOKEN);
      localStorage.removeItem(KEY.AVATAR);
      history.push("/");
    }
  };
  return (
    <div>
      <Button aria-describedby={id} color="primary" onClick={handleClick}>
        <Avatar alt="Remy Sharp" src={avatart} />
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
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <AutorenewIcon />
            </ListItemIcon>
            <Link to="/accounts">
              <ListItemText primary="Tài khoản" />{" "}
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Link to="/change-password">
              <ListItemText primary="Đổi mật khẩu" />
            </Link>
          </ListItem>
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" style={{ color: "red" }} />
          </ListItem>
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

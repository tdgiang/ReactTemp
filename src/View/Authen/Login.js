import React, { useEffect, useState } from "react";

import {
  Backdrop,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";

import { FormHelperText } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { apiLogin } from "../../apis/Functions/users";
import KEY from "../../assets/Key";
import { encryString } from "../../config/Function";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";
import { saveUserToRedux } from "../../actions/users";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dcvinvest.com/">
        Logo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: "100%",
    marginBottom: "3em",
  },
  box: {
    backgroundColor: "white",
    padding: "2em",
    borderRadius: "1.5em",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const LoginScreen = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [helperText, sethelperText] = useState("");
  const handleUser = async () => {
    let res;
    localStorage.setItem(KEY.API_TOKEN, "res.data.data.token");
    history.push("/home");

    // if (state.email === "" || state.password === "") {
    //   sethelperText("");
    //   sethelperText("Cần phải điền đầy đủ email và password");
    // } else {
    //   props.showLoading();
    //   res = await apiLogin({
    //     username: state.email,
    //     password: encryString(state.password),
    //   });
    //   if (res.status === 200) {
    //     if (res.data.code == 200) {
    //       props.saveUserToRedux(res.data.data);
    //       localStorage.setItem(
    //         KEY.KEY_SECUTIRY,
    //         res.data.data.is_have_security_code
    //       );

    //       localStorage.setItem(KEY.USERINFOR, JSON.stringify(res.data.data));
    //       localStorage.setItem(KEY.API_TOKEN, res.data.data.token);
    //       localStorage.setItem(KEY.AVATAR, res.data.data.avatar);
    //       localStorage.setItem(KEY.NAMEUSER, res.data.data.full_name);
    //       localStorage.setItem(
    //         KEY.PERMISSIONS,
    //         JSON.stringify(res.data.data.user_permissions)
    //       );

    //       let ListPath = [];
    //       if (res.data.data.user_permissions) {
    //         res.data.data.user_permissions.map((item) => {
    //           if (item.actions.length > 0) {
    //             item.actions.map((e) => {
    //               ListPath.push(e);
    //             });
    //           }
    //         });
    //       }
    //       localStorage.setItem(KEY.LISTPATH, JSON.stringify(ListPath));
    //       sethelperText("");
    //       setTimeout(() => {
    //         history.push("/home");
    //       }, 500);
    //     }
    //     if (!res.data.data) {
    //       enqueueSnackbar("Đăng nhập thất bại!", { variant: "error" });
    //     }
    //   }
    // }
    props.hideLoading();
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleUser();
    }
  };
  return (
    <>
      <Backdrop
        className={classes.backdrop}
        open={props.modalLoading.isVisible}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container
        style={{ position: "relative", zIndex: "2" }}
        component="main"
        maxWidth="xs"
      >
        <div className={classes.paper}>
          <img className={classes.logo} src={Logo} alt="logo" />
          <div className={classes.box}>
            <div className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nhập tên đăng nhập"
                value={state.email}
                onKeyPress={handleKeypress}
                onChange={(e) => {
                  setState({
                    ...state,
                    email: e.target.value,
                  });
                }}
              />
              <TextField
                variant="outlined"
                type="password"
                margin="normal"
                name="password"
                id="password"
                required
                fullWidth
                label="Nhập mật khẩu"
                value={state.password}
                onKeyPress={handleKeypress}
                onChange={(e) => {
                  setState({
                    ...state,
                    password: e.target.value,
                  });
                }}
              />
              <div style={{ width: "100%" }}>
                <FormHelperText
                  style={{ marginLeft: "16px", color: "red", fontSize: "13px" }}
                >
                  {helperText}
                </FormHelperText>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleUser}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  xs
                >
                  <Link href="forgot-password" variant="body2">
                    Quên mật khẩu
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    modalLoading: state.ModalLoadingReducer,
  };
};
export default connect(mapStateToProps, {
  saveUserToRedux,
  showLoading,
  hideLoading,
})(LoginScreen);

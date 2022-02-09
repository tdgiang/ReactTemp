import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

import { Backdrop, TextField, CircularProgress } from "@material-ui/core";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { apiGetOTP } from "../../apis/Functions/users";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dcvinvest.com/">
        DCV INVEST
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
    marginTop: theme.spacing(3),
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

const ForgotPassword = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, setValue, reset } = useForm();

  const onSubmit = async (values) => {
    props.showLoading();
    const res = await apiGetOTP({
      email: values.email,
    });
    props.hideLoading();
    if (res.data.code == 200) {
      enqueueSnackbar("Mã bảo mật đã được gửi vào email!", {
        variant: "success",
      });
      history.push("/confirm-password");
    } else {
      enqueueSnackbar("Gửi mã xác nhận thất bại!", { variant: "error" });
    }
  };

  return (
    <Container
      style={{ position: "relative", zIndex: "2" }}
      component="main"
      maxWidth="xs"
    >
      <Backdrop
        className={classes.backdrop}
        open={props.modalLoading.isVisible}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className={classes.paper}>
        <img className={classes.logo} src={Logo} alt="logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.box}>
            <Typography
              style={{
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
                marginBottom: "15px",
              }}
              component="h1"
              variant="h5"
            >
              QUÊN MẬT KHẨU
            </Typography>
            <Typography variant="body2">
              Vui lòng nhập email đã đăng ký để lấy lại mật khẩu.
            </Typography>
            <div className={classes.form} noValidate>
              <TextField
                variant="outlined"
                required
                name={"email"}
                fullWidth
                label="Nhập email"
                onChange={(e) => {
                  setValue("email", e.target.value);
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Tiếp tục
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    modalLoading: state.ModalLoadingReducer,
  };
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  ForgotPassword
);

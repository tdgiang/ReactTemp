import React, { useEffect, useState } from "react";

import {
  Backdrop,
  TextField,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { apiConfirmPass } from "../../apis/Functions/users";

import { encryString } from "../../config/Function";
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
    if (values.new_password === values.confim_password) {
      props.showLoading();
      const res = await apiConfirmPass({
        otp_code: values.otp_code,
        email: values.email,
        new_password: encryString(values.new_password),
      });
      props.hideLoading();
      if (res.data.code == 200) {
        enqueueSnackbar("Đổi mật khẩu thành công!", { variant: "success" });
        history.push("/");
      } else {
        enqueueSnackbar("Đổi mật khẩu thất bại!", { variant: "error" });
      }
    } else {
      enqueueSnackbar("Mật khẩu mới và xác nhận mật khẩu không trùng nhau!", {
        variant: "warning",
      });
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
              Tạo mật khẩu mới
            </Typography>

            <Grid
              container
              style={{ width: 400 }}
              direction={"column"}
              spacing={3}
            >
              <Grid item>
                <TextField
                  variant="outlined"
                  name="otp_code"
                  label="Nhập Mã OTP"
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("otp_code", e.target.value);
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  variant="outlined"
                  type={"email"}
                  name="email"
                  label="Nhập email"
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("email", e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  type={"password"}
                  name="new_password"
                  label="Nhập mật khẩu mới"
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("new_password", e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  type={"password"}
                  name="confim_password"
                  label="Nhập xác nhận mật khẩu"
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("confim_password", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                item
              >
                <Button type="submit" variant="contained" color="primary">
                  Đồng ý
                </Button>
              </Grid>
            </Grid>
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

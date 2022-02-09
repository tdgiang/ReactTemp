import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";
import { apiConfirmOTP } from "../../apis/Functions/users";

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
}));

const ForgotPassword = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, setValue, reset } = useForm();

  const onSubmit = async (values) => {
    props.showLoading();
    const res = await apiConfirmOTP({
      otp_code: values.otp_code,
    });
    props.hideLoading();
    if (res.data.code == 200) {
      history.push("/confirm-password");
    } else {
      enqueueSnackbar("Mã xác thực không hợp lệ!", { variant: "error" });
    }
  };

  return (
    <Container
      style={{ position: "relative", zIndex: "2" }}
      component="main"
      maxWidth="xs"
    >
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
              Mã xác thực gồm 06 chữ số gửi đến email của bạn.
            </Typography>
            <div className={classes.form} noValidate>
              <TextField
                variant="outlined"
                required
                name={"otp_code"}
                fullWidth
                label="Nhập mã xác thực"
                onChange={(e) => {
                  setValue("otp_code", e.target.value);
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
  };
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  ForgotPassword
);

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  FormHelperText,
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { encryString } from "../../config/Function";
import { apiChangePass } from "../../apis/Functions/users";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";

import { useForm } from "react-hook-form";
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

  box: {
    backgroundColor: "white",
    padding: "2em",
    borderRadius: "1.5em",
    width: "75%",
  },
}));

function SecutityChange(props) {
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, setValue, reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (values) => {
    if (values.new_password === values.confim_password) {
      props.showLoading();
      const res = await apiChangePass({
        old_password: encryString(values.old_password),
        new_password: encryString(values.new_password),
      });

      props.hideLoading();
      if (res.data.code == 200) {
        enqueueSnackbar("Đổi mật khẩu thành công!", { variant: "success" });
        history.push("/home");
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
    <div>
      <Paper className={classes.paper}>
        <div className={classes.box}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <TextField
                  variant="outlined"
                  type={"password"}
                  name="old_password"
                  label="Mật khẩu cũ"
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("old_password", e.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  type={"password"}
                  name="new_password"
                  label="Mật khẩu mới"
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
                  label="Xác nhận mật khẩu"
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
                  Cập nhật
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  showLoading,
  hideLoading,
})(SecutityChange);

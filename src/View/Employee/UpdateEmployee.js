import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  TextField,
  Input,
  Grid,
  FormControlLabel,
  InputLabel,
  Select,
  Checkbox,
  MenuItem,
  RadioGroup,
  Radio,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { set, useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { convertDate, convertTimeApi, trimObject } from "../../config/Function";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";
import PickerImage from "../../Component/Input/PickerImage";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import KEY from "../../assets/Key";
import { detailEmployee, updateEmployee } from "../../apis/Functions/Employee";
import { getDropDownGroup } from "../../apis/Functions/Dropdown";
import { getListActionByGroup } from "../../apis/Functions/Group";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 450,
    maxWidth: 450,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
  home: {
    display: "flex",
    fontSize: 20,
    marginTop: 20,
  },
  icon: {
    marginTop: 3,
  },
  addIcon: {
    color: "#fff",
    textDecoration: "none",
  },
  picker: {
    marginTop: theme.spacing(1.8),
    maxWidth: 170,
  },

  input: {
    width: "100%",
    height: 30,
  },
}));

function CreateDeparment(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [listGroup, setListGroup] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  const [listAction, setListAction] = useState([]);

  const [birth_day, setBirth_day] = useState();
  const [role, setRole] = useState();
  const [defaultAction, setDefaultAction] = useState([]);
  const [gender, setGender] = useState();
  const [is_payment_role, setIs_payment_role] = useState(false);
  useEffect(() => {
    getListAction();
    setListChecked([]);
  }, [role]);

  useEffect(() => {
    getListDefault();
  }, [defaultAction]);

  const getListDefault = () => {
    const newList = defaultAction.map((e) => {
      return e.action_id;
    });
    setListChecked(newList);
  };

  const getListAction = async () => {
    if (role) {
      props.showLoading();
      const res = await getListActionByGroup(role, {});

      props.hideLoading();
      if (res.data.code == 200 && res.data.data) {
        setListAction(res.data.data.userGroupPermissions);
      } else if (res.data.code == 401) {
        setTimeout(() => {
          history.push("/");
        }, 100);
      } else {
        enqueueSnackbar("Error!", { variant: "error" });
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const getData = async () => {
    props.showLoading();
    Promise.all([
      detailEmployee(location.state, {}),
      getDropDownGroup({}),
    ]).then((values) => {
      setData(values[0].data.data);
      setBirth_day(convertTimeApi(values[0].data.data.birth_day));
      setImage(values[0].data.data.avatar);
      setIs_payment_role(
        values[0].data.data.is_payment_role == true ? true : false
      );
      setRole(values[0].data.data.userGroupId);
      setGender(values[0].data.data.gender == 6 ? "6" : "7");
      setListGroup(values[1].data.data);
      setDefaultAction(values[0].data.data.userPermissions);
    });
    props.hideLoading();
  };

  const onPicker = (value) => {
    if (value.target.checked) {
      const newList = listChecked.concat(parseInt(value.target.name));

      setListChecked(newList);
    } else {
      const newList = listChecked.filter((e) => {
        return e != value.target.name;
      });

      setListChecked(newList);
    }
  };

  const onSubmit = async (value) => {
    // if (value.password === confirmPass) {

    const newValue = trimObject(value);

    const newList = listChecked.map((e) => {
      return { action_id: e };
    });

    props.showLoading();
    const res = await updateEmployee({
      ...data,
      ...newValue,
      birth_day: convertDate(birth_day),
      avatar: image,
      userPermissions: newList,
      status: 1,
      userGroupId: role,
      gender: parseInt(gender),
      is_payment_role,
    });

    props.hideLoading();
    if (res.data.code == 200) {
      reset();
      history.push("/employee");
      enqueueSnackbar("Cập nhật nhân viên thành công!", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Cập nhật nhân viên thất bại!", { variant: "error" });
    }
  };

  const onFileChange = (link) => {
    setImage(link);
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid xs={12} item>
            <div className={classes.home}>
              <Link
                to={"/home"}
                underline="hover"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Trang chủ
              </Link>
              <div className={classes.icon}>
                <ArrowLeftIcon />
              </div>
              <div>Quản lý nhân viên</div>
              <div className={classes.icon}>
                <ArrowLeftIcon />
              </div>
              <div>Danh sách nhân viên</div>
              <div className={classes.icon}>
                <ArrowLeftIcon />
              </div>
              <div>Cập nhật</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {data ? (
        <Paper
          elevation={3}
          style={{ padding: 20, marginBottom: 20, marginTop: 20 }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container xs={12} spacing={3}>
              <Grid item xs={6} sm={6}>
                <TextField
                  name="full_name"
                  label="Họ và tên"
                  fullWidth
                  required={true}
                  defaultValue={data.full_name}
                  onChange={(e) => {
                    setValue("full_name", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6} display="flex">
                <TextField
                  id="phone"
                  name="phone"
                  label="Số điện thoại"
                  defaultValue={data.phone}
                  fullWidth
                  onChange={(e) => {
                    setValue("phone", e.target.value);
                  }}
                  required={true}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={data.email}
                  label="Email"
                  required={true}
                  fullWidth
                  onChange={(e) => {
                    setValue("email", e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={6} sm={6} item>
                <InputLabel style={{ fontSize: 12, marginTop: 5 }}>
                  Ngày sinh
                </InputLabel>

                <KeyboardDatePicker
                  disableToolbar
                  fullWidth
                  clearable={true}
                  format="dd/MM/yyyy"
                  value={birth_day}
                  onChange={(e) => {
                    setBirth_day(e);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>

              <Grid item xs={6} sm={6}>
                <TextField
                  name="address"
                  label="Địa chỉ"
                  defaultValue={data.address}
                  fullWidth
                  required={true}
                  onChange={(e) => {
                    setValue("address", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  name="username"
                  label="Tên đăng nhập"
                  fullWidth
                  disabled
                  defaultValue={data.username}
                  required={true}
                  onChange={(e) => {
                    setValue("username", e.target.value);
                  }}
                />
              </Grid>

              <Grid
                style={{ alignItems: "center" }}
                container
                row
                item
                xs={12}
                sm={12}
              >
                <Grid style={{ paddingRight: "1.5em", width: 100 }}>
                  <InputLabel>Giới tính</InputLabel>
                </Grid>
                {gender ? (
                  <RadioGroup
                    row
                    value={gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  >
                    <FormControlLabel
                      value={"6"}
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel
                      value={"7"}
                      control={<Radio />}
                      label="Nữ"
                    />
                  </RadioGroup>
                ) : null}
              </Grid>

              <Grid style={{ marginTop: 20 }} item xs={12} sm={12}>
                <PickerImage
                  image={image}
                  onFileChange={onFileChange}
                  title={"Ảnh đại diện"}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  label={"Phê duyệt khoản vay"}
                  control={
                    <Checkbox
                      checked={is_payment_role}
                      onChange={(event) => {
                        setIs_payment_role(event.target.checked);
                      }}
                    />
                  }
                />
              </Grid>

              <Grid xs={6} sm={6} item>
                <InputLabel style={{ fontSize: 12, marginTop: 5 }}>
                  Vai trò
                </InputLabel>
                {role ? (
                  <Select
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    fullWidth
                  >
                    {listGroup.map((e) => (
                      <MenuItem value={e.id}>{e.name}</MenuItem>
                    ))}
                  </Select>
                ) : null}
              </Grid>

              <Grid item xs={12} sm={12}>
                <Typography variant={"h5"}>Danh sách hành động</Typography>
                <Grid row container item xs={12} sm={12}>
                  {listAction.map((e) => (
                    <Grid item xs={3}>
                      <FormControlLabel
                        label={e.action_name}
                        control={
                          <Checkbox
                            checked={listChecked.includes(e.action_id)}
                            onChange={onPicker}
                            name={e.action_id}
                          />
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              xs={12}
              spacing={3}
              justify="center"
              alignItems="flex-end"
              style={{ marginTop: 20 }}
              direction="column"
            >
              <Grid item xs={12} sm={6}>
                <Button variant="contained" color="secondary">
                  <Link to="/employee" className={classes.addIcon}>
                    Quay Lại
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "green",
                    marginLeft: 30,
                    color: "white",
                  }}
                  type="submit"
                >
                  Cập nhật
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  CreateDeparment
);

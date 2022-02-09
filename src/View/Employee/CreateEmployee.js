import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  TextField,
  Input,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@material-ui/core";
import KEY from "../../assets/Key";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { encryString, convertDate, trimObject } from "../../config/Function";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";
import PickerImage from "../../Component/Input/PickerImage";
import { getDropDownGroup } from "../../apis/Functions/Dropdown";
import { getListActionByGroup } from "../../apis/Functions/Group";
import { createEmployee } from "../../apis/Functions/Employee";
import { KeyboardDatePicker } from "@material-ui/pickers";
const LISTMETHOD = [
  "Quản lý nhân viên",
  "Quản lý khách hàng",
  "Quản lý thẻ tín dụng",
  "Quản lý đại lý",
  "Quản lý gói đầu tư",
  "Quản lý Banner",
  "Quản lý sự kiện",
  "Quản lý sự kiện",
];

const LISTACTION = [
  "Quản lý nhân viên",
  "Quản lý khách hàng",
  "Quản lý thẻ tín dụng",
  "Quản lý đại lý",
  "Quản lý gói đầu tư",
  "Quản lý Banner",
  "Quản lý sự kiện",
  "Quản lý sự kiện",
];

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
  addImage: {
    fontSize: 20,
    marginTop: 27,
  },
}));

function CreateDeparment(props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [image, setImage] = useState();

  const [listGroup, setListGroup] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  const [listAction, setListAction] = useState([]);
  const [confirmPass, setConfirmPass] = useState("");
  const [is_payment_role, setIs_payment_role] = useState(false);
  const [birth_day, setBirth_day] = useState();
  const [gender, setGender] = useState("6");
  const [role, setRole] = useState();
  const [isAdmin, setAdmin] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getData();
    let temp = localStorage.getItem(KEY.USERINFOR);
    let userInfor = JSON.parse(temp);
    console.log(userInfor);
    if (userInfor.group_id == 33) setAdmin(true);
  }, []);

  useEffect(() => {
    getListAction();
    setListChecked([]);
  }, [role]);

  const getListAction = async () => {
    let temp = localStorage.getItem(KEY.USERINFOR);
    let userInfor = JSON.parse(temp);
    if (userInfor.group_id) {
      props.showLoading();
      let res;
      if (isAdmin) res = await getListActionByGroup(role, {});
      else res = await getListActionByGroup(userInfor.group_id, {});
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

  const getData = async () => {
    props.showLoading();
    const res = await getDropDownGroup({});

    props.hideLoading();
    if (res.data.code == 200 && res.data.data) {
      setListGroup(res.data.data);
    } else if (res.data.code == 401) {
      localStorage.removeItem("API_TOKEN");
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      setListGroup([]);
      enqueueSnackbar("Error!", { variant: "error" });
    }
  };

  const onSubmit = async (value) => {
    if (value) {
      const newValue = trimObject(value);
      if (newValue.password === confirmPass) {
        const newList = listChecked.map((e) => {
          return { action_id: e };
        });

        let temp = localStorage.getItem(KEY.USERINFOR);
        let userInfor = JSON.parse(temp);
        props.showLoading();
        const res = await createEmployee({
          ...newValue,
          birth_day: convertDate(birth_day),
          avatar: image,
          userPermissions: newList,
          status: 1,
          password: encryString(value.password),
          userGroupId: isAdmin ? role : userInfor.group_id,
          gender: parseInt(gender),
          is_payment_role,
        });

        props.hideLoading();
        if (res.data.code == 200) {
          reset();
          history.push("/employee");
          enqueueSnackbar("Tạo nhân viên thành công!", {
            variant: "success",
          });
        } else {
          enqueueSnackbar("Tạo nhân viên thất bại!", { variant: "error" });
        }
      } else {
        enqueueSnackbar("Mật khẩu mới và xác nhận mật khẩu không trùng nhau!", {
          variant: "warning",
        });
      }
    }
  };

  const onFileChange = (link) => {
    setImage(link);
  };

  const onPicker = (value) => {
    if (value.target.checked) {
      const newList = listChecked.concat(value.target.name);
      setListChecked(newList);
    } else {
      const newList = listChecked.filter((e) => {
        return e != value.target.name;
      });
      setListChecked(newList);
    }
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
              <div>Thêm mới</div>
            </div>
          </Grid>
        </Grid>
      </Grid>
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
                required={true}
                onChange={(e) => {
                  setValue("username", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                type="password"
                name="password"
                label="Mật khẩu"
                fullWidth
                required={true}
                onChange={(e) => {
                  setValue("password", e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                type="password"
                label="Nhập lại mật khẩu"
                fullWidth
                required={true}
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
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
              <RadioGroup
                row
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <FormControlLabel value={"6"} control={<Radio />} label="Nam" />
                <FormControlLabel value={"7"} control={<Radio />} label="Nữ" />
              </RadioGroup>
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
            {isAdmin == true ? (
              <Grid xs={6} sm={6} item>
                <InputLabel style={{ fontSize: 12, marginTop: 5 }}>
                  Vai trò
                </InputLabel>
                <Select
                  id="demo-simple-select-placeholder-label"
                  onChange={(e) => setRole(e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  {listGroup.map((e) => (
                    <MenuItem value={e.id}>{e.name}</MenuItem>
                  ))}
                </Select>
              </Grid>
            ) : null}

            <Grid item xs={12} sm={12}>
              <Typography variant={"h5"}>Danh sách hành động</Typography>
              <Grid row container item xs={12} sm={12}>
                {listAction.map((e) => (
                  <Grid item xs={3}>
                    <FormControlLabel
                      label={e.action_name}
                      control={
                        <Checkbox onChange={onPicker} name={e.action_id} />
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
                Thêm mới
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  CreateDeparment
);

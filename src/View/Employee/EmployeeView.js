import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "date-fns";
import {
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Link, useHistory } from "react-router-dom";
import colors from "../../assets/Color";

import TableAccount from "./Table";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    fontSize: 20,
    marginTop: 20,
    textTransform: "capitalize",
  },
  button: {
    textTransform: "capitalize",
    backgroundColor: colors.main,
    color: "#fff",
    width: 100,
    "&:hover": {
      backgroundColor: colors.main,
    },
  },

  formControl: {
    width: 150,
    marginLeft: 20,
  },
  icon: {
    marginTop: 3,
  },
  title: {
    fontWeight: "bold",
  },

  buttons: {
    marginRight: theme.spacing(2),
    textTransform: "capitalize",
    textTransform: "capitalize",
    background: "#4caf50 !important",
    color: "#fff",
  },
  search: {
    minWidth: 200,
  },
  flexfilter: {
    display: "flex",
  },
  active: {
    marginLeft: 30,
  },
  addaccount: {
    color: "#fff",
    textDecoration: "none",
  },
}));

function ToolNotificate(props) {
  const history = useHistory();
  const {
    data,
    updateItem,
    removeItem,
    setTxtSearch,
    changeActive,
    setChangeActive,
    handeChangeActive,
    setPageIndex,
    pageIndex,
    totalRecords,
    setActiveSeleted,
    activeSelected,
    permissions,
  } = props;
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
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
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item spacing={3}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="tìm kiếm ..."
              onChange={(e) => {
                setTimeout(() => {
                  setTxtSearch(e.target.value);
                }, 1000);
              }}
              className={classes.search}
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Trạng thái
              </InputLabel>
              <Select
                native
                label="Age"
                value={activeSelected}
                onChange={(e) => setActiveSeleted(e.target.value)}
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="Tất cả" value="" />
                {[
                  { name: "Hiển thị", id: 1 },
                  { name: "Khoá", id: 2 },
                ].map((e) => (
                  <option value={e.id}>{e.name}</option>
                ))}
              </Select>
            </FormControl>

            {/* <Select
              variant={"outlined"}
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              onChange={(e) => setActiveSeleted(e.target.value)}
              displayEmpty
              defaultValue={activeSelected}
              className={classes.formControl}
            >
              <MenuItem value={-1}>Tất cả</MenuItem>
              <MenuItem value={0}>Chờ duyệt</MenuItem>
              <MenuItem value={1}>Đang hoạt động</MenuItem>
              <MenuItem value={2}>Tạm dựng</MenuItem>
            </Select> */}
          </Grid>
          <Grid item>
            {permissions.findIndex((e) => e === "CreateEmployee") != -1 ? (
              <Button
                variant="contained"
                className={classes.button}
                onClick={() =>
                  history.push({
                    pathname: "/employee/create-employee",
                    result: "?query=abc",
                    state: { detail: "some_value" },
                  })
                }
              >
                Thêm
              </Button>
            ) : null}
          </Grid>
        </Grid>

        <Grid xs={12} item>
          <TableAccount
            data={data}
            changeActive={changeActive}
            setChangeActive={setChangeActive}
            handeChangeActive={handeChangeActive}
            updateItem={updateItem}
            removeItem={removeItem}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            totalRecords={totalRecords}
            permissions={permissions}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ToolNotificate;

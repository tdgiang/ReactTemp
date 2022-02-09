import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  IconButton,
  MenuItem,
  Select,
  Modal,
  Fade,
  Grid,
  Backdrop,
  Link,
  Button,
  Tooltip,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import colors from "../../assets/Color";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import KEY from "../../assets/Key";
import { connect } from "react-redux";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import useStyles from "../Style/Table";

const columns = [
  {
    id: "index",
    label: "STT",
    align: "center",
    width: 40,
  },
  {
    id: "code",
    label: "Mã NV",
    align: "center",
    minWidth: "auto",
  },
  {
    id: "full_name",
    label: "Họ và tên",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "email",
    label: "Email",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "user_group_name",
    label: "Vai trò",
    align: "left",
    minWidth: "auto",
  },
];

function StickyHeadTable(props) {
  const {
    data,
    handeChangeActive,
    removeItem,
    changeActive,
    setChangeActive,
    setPageIndex,
    setPageSize,
    pageIndex,
    totalRecords,
    permissions,
  } = props;
  const classes = useStyles();
  const [detailAccount, setDetailAccount] = useState();
  const [selected, setSelected] = useState({ fullname: "", sscid: "" });
  const [open, setOpen] = React.useState(false);
  const [clear, setClear] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();
  let history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPageIndex(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setPageSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setClear(false);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={"center"}
                  style={{
                    width: column.minWidth,
                    backgroundColor: colors.headerTable,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}

              {permissions.findIndex((e) => e === "UpdateStatusEmployee") !=
              -1 ? (
                <TableCell
                  style={{
                    backgroundColor: colors.headerTable,

                    width: 100,
                  }}
                >
                  Trạng thái
                </TableCell>
              ) : null}

              <TableCell
                style={{
                  width: 120,
                  textAlign: "center",
                  backgroundColor: colors.headerTable,
                }}
              >
                Hành động
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.columnTable}>
            {data.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const avatar = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? (
                          <img
                            src={column.format(avatar)}
                            className={classes.image}
                          />
                        ) : (
                          avatar
                        )}
                      </TableCell>
                    );
                  })}
                  {permissions.findIndex((e) => e === "UpdateStatusEmployee") !=
                  -1 ? (
                    <TableCell className={classes.border}>
                      <Select
                        variant={"outlined"}
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        onChange={(e) =>
                          handeChangeActive(row.id, e.target.value)
                        }
                        displayEmpty
                        defaultValue={row.status}
                        className={classes.formControl}
                      >
                        <MenuItem value={1}>Hiển thị</MenuItem>
                        <MenuItem value={2}>Khóa</MenuItem>
                      </Select>
                    </TableCell>
                  ) : null}

                  <TableCell className={classes.action}>
                    {permissions.findIndex((e) => e === "UpdateEmployee") !=
                    -1 ? (
                      <Tooltip title="Cập nhật">
                        <IconButton
                          onClick={() => {
                            history.push({
                              pathname: "/employee/update-employee",
                              state: row.id,
                            });
                          }}
                          style={{
                            color: colors.white,
                            backgroundColor: "#4caf50",
                            padding: "4px 8px",
                            borderTopLeftRadius: 2,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 2,
                          }}
                        >
                          <EditIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    ) : null}

                    {permissions.findIndex((e) => e === "DeleteEmployee") !=
                    -1 ? (
                      <Tooltip title="Xoá">
                        <IconButton
                          onClick={() => {
                            setSelected(row);
                            setClear(true);
                          }}
                          style={{
                            color: colors.white,
                            backgroundColor: "#ff1744",
                            padding: "4px 8px",
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 2,
                            borderBottomRightRadius: 2,
                            borderBottomLeftRadius: 0,
                          }}
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    ) : null}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={clear}
        onClose={handleClear}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={clear}>
          <div className={classes.paper}>
            <div style={{ textAlign: "center" }}>
              <h2>Xóa nhân viên</h2>
            </div>
            <Grid container>
              <Grid item xs={12}>
                <Grid container style={{ textAlign: "center" }}>
                  {` Bạn có muốn xóa nhân viên "${selected.full_name}" hay không?`}
                </Grid>
              </Grid>

              <Grid
                container
                xs={12}
                direction="row"
                style={{ textAlign: "center", marginTop: 20 }}
              >
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClear}
                  >
                    Thoát
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "green",
                      marginLeft: 30,
                      color: "white",
                    }}
                    onClick={() => {
                      removeItem(selected.id);
                      handleClear();
                    }}
                  >
                    Đồng ý
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>

      <TablePagination
        component="div"
        page={pageIndex}
        count={totalRecords}
        rowsPerPage={10}
        rowsPerPageOptions={[]}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  StickyHeadTable
);

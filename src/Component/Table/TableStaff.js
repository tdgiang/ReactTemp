import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  Tooltip,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import colors from "../../assets/Color";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
const columns = [
  {
    id: "id",
    label: "STT",
    align: "center",
    minWidth: 40,
  },
  {
    id: "mnv",
    label: "Mã NV",
    align: "center",
    minWidth: "auto",
  },
  {
    id: "fullName",
    label: "Họ và tên",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "email",
    label: "email",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "position",
    label: "Chức vụ",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "status",
    label: "Trạng thái",
    align: "left",
    minWidth: "auto",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
  action: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: "33px 10px !important",
  },
  head: {
    backgroundColor: "red",
  },
  image: {
    width: 50,
    height: 50,
  },
  formControl: {
    minWidth: 110,
  },
  border: {
    borderRight: "0.05px solid #e0e0e0",
  },
  table: {
    padding: "20px 10px !important",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TableStaff(props) {
  const {
    removeItem,
    updateItem,
    setPageIndex,
    changeActive,
    setPageSize,
    pageIndex,
    totalPage,
    pageSize,
  } = props;

  const classes = useStyles();
  const history = useHistory();
  const handleChangePage = (event, newPage) => {
    setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    checkboxSelection
                    disableSelectionOnClick
                    key={column.id}
                    align={column.align}
                    style={{
                      width: column.minWidth,
                      backgroundColor: colors.main,
                      color: "white",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}

                <TableCell
                  style={{
                    minWidth: 140,
                    textAlign: "center",
                    backgroundColor: colors.main,
                    color: "white",
                  }}
                >
                  Hành động
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.table}
                        >
                          {column.format ? (
                            <img
                              src={column.format(value)}
                              className={classes.image}
                            />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}

                    <TableCell className={classes.action}>
                      <Tooltip title="Cập nhật">
                        <IconButton
                          onClick={() =>
                            history.push({
                              pathname: "/staff/add-update",
                              result: "?query=abc",
                              state: { detail: "some_value" },
                            })
                          }
                          style={{
                            color: "#fff",
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
                      <Tooltip title="Xoá">
                        <IconButton
                          onClick={() => {
                            removeItem(row.id);
                          }}
                          style={{
                            color: "#fff",
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
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          page={pageIndex}
          count={totalPage * pageSize}
          rowsPerPage={10}
          rowsPerPageOptions={[]}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

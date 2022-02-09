import React, { useState } from "react";
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
  MenuItem,
  Select,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import AddIcon from "@material-ui/icons/Add";
import colors from "../../assets/Color";
import WatchUser from "../Details/WatchUser";

const columns = [
  {
    id: "id",
    label: "STT",
    align: "center",
    minWidth: 40,
  },
  {
    id: "avatar",
    label: "Avartar",
    align: "center",
    minWidth: "auto",
    format: (value) => value,
  },
  {
    id: "username",
    label: "Tên đăng nhập",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "sscid",
    label: "Mã SSCID",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "display_name",
    label: "Họ và tên",
    align: "left",
    minWidth: "auto",
  },
  {
    id: "phone",
    label: "SĐT",
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
    id: "last_login",
    label: "Đăng nhập lần cuối",
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
}));

export default function StickyHeadTable(props) {
  const {
    data,
    updateItem,
    removeItem,
    changeActive,
    setPageIndex,
    setPageSize,
    pageIndex,
    totalPage,
    pageSize,
  } = props;

  const [detailSelected, setDetailSelected] = useState();

  const classes = useStyles();

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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
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
                  backgroundColor: colors.main,
                  color: "white",
                }}
              >
                Trạng thái
              </TableCell>
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
          <TableBody className={classes.columnTable}>
            {props.data.map((row) => {
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
                  <TableCell className={classes.border}>
                    <Select
                      variant={"outlined"}
                      labelId="demo-simple-select-placeholder-label-label"
                      id="demo-simple-select-placeholder-label"
                      onChange={(e) => changeActive(row.id, e.target.value)}
                      displayEmpty
                      className={classes.formControl}
                    >
                      <MenuItem value="Avtive">Active</MenuItem>
                      <MenuItem value="Deactive">DeActive</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell className={classes.action}>
                    <IconButton
                      style={{
                        color: "#fff",
                        backgroundColor: "#ff9800",
                        padding: "4px 8px",
                        borderRadius: 0,
                      }}
                      // onClick={() => setDetailSelected(row);
                      //   handleOpen}
                    >
                      <RemoveRedEyeIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        alert("Update item");
                      }}
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
                    <IconButton
                      onClick={() => {
                        alert("Thêm mới");
                      }}
                      style={{
                        color: "#fff",
                        backgroundColor: colors.main,
                        padding: "4px 8px",
                        borderRadius: 0,
                      }}
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>

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
      <WatchUser data={detailSelected} open={open} handleClose={handleClose} />
    </Paper>
  );
}

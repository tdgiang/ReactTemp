import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
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
import colors from "../../assets/Color";

const columns = [
  {
    id: "pack_name",
    label: "Gói đầu tư",
    align: "center",
    minWidth: "auto",
  },
  {
    id: "range",
    label: "Giá trị",
    align: "right",
    minWidth: "auto",
  },
  {
    id: "count",
    label: "Số người đăng ký",
    align: "center",
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
  const { dataTable } = props;
  const [data, setData] = useState([]);

  const classes = useStyles();

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
                    backgroundColor: "#E5E5E5",
                    color: "black",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.columnTable}>
            {dataTable.map((row) => {
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

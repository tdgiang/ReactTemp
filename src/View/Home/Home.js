import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, Container } from "@material-ui/core";
import TableLeft from "./TableLeft";
import TableRight from "./TableRight";
import Header from "./Header";
import Dashboard from "./Dashboard";
import ColumnHome from "./ColumnHome";
import { useSnackbar } from "notistack";
import {
  adminCommon,
  dashboardTable,
  adminAnalyst,
} from "../../apis/Functions/Home";
import { useHistory } from "react-router-dom";
Dashbroad.propTypes = {};

function Dashbroad(props) {
  const [data, setData] = useState(null);
  const [dataTable, setDataTable] = useState([]);
  const [dataColumn, setDataColumn] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  useEffect(() => {
    getData();
    getDataTable();
    getDataColumn();
  }, []);

  const getData = async () => {
    const res = await adminCommon({});
    if (res.data.code == 200 && res.data.data) {
      setData(res.data.data);
    } else if (res.data.code == 401) {
      localStorage.removeItem("API_TOKEN");
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      enqueueSnackbar("Error!", { variant: "error" });
    }
  };

  const getDataTable = async () => {
    const res = await dashboardTable({});

    if (res.data.code == 200 && res.data.data) {
      const newList = res.data.data.map((e) => {
        return { ...e, range: `${e.min_amount}-${e.max_amount}` };
      });

      setDataTable(newList);
    } else if (res.data.code == 401) {
      localStorage.removeItem("API_TOKEN");
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      enqueueSnackbar("Error!", { variant: "error" });
    }
  };

  const getDataColumn = async () => {
    const res = await adminAnalyst({});
    console.log(res.data.data);
    if (res.data.code == 200 && res.data.data) {
      const listTitle = res.data.data.map((e) => {
        return e.date;
      });

      const listMoneyIn = res.data.data.map((e) => {
        return e.total_in;
      });
      const listMoneyOut = res.data.data.map((e) => {
        return e.total_out;
      });

      setDataColumn({ listTitle, listMoneyIn, listMoneyOut });
    } else if (res.data.code == 401) {
      localStorage.removeItem("API_TOKEN");
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      enqueueSnackbar("Error!", { variant: "error" });
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item lg={12} md={12} xl={12} xs={12}>
          <Header data={data} />
        </Grid>
        <Grid item spacing={3} container xs={12}>
          <Grid item xs={6}>
            <ColumnHome dataColumn={dataColumn} />
          </Grid>
          <Grid item xs={6}>
            <TableLeft dataTable={dataTable} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashbroad;

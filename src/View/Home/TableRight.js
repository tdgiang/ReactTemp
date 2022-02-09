import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Button, Grid, Paper, Card, Typography } from "@material-ui/core";
import { toPriceVnd } from "../../config/Function";
import { makeStyles } from "@material-ui/core/styles";
import DateRange from "../../Component/Picker/DateRange";

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: 320,
    height: 320,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapRight: {
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

const DoughnutChart = () => {
  const classes = useStyles();

  const list = [
    {
      title: "Phí thu được từ cho vay",
      amount: 2000000,
      color: "rgba(255, 99, 132, 1)",
    },
    {
      title: "Phí thu được từ cho vay",
      amount: 250000000,
      color: "rgba(54, 162, 235, 1)",
    },
    {
      title: "Phí thu được từ cho vay",
      amount: 30000000,
      color: "rgba(255, 206, 86, 1)",
    },
  ];

  return (
    <Paper
      style={{
        padding: 20,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div className={classes.box}>
        <Card
          style={{
            backgroundColor: "#00a65a",
            padding: 20,
            width: 200,
          }}
        >
          <Grid container className={classes.wrapRight}>
            <Grid item>
              <Typography variant="p">Nhà đầu tư mới</Typography>
              <Typography variant="h5"> 50 thẻ</Typography>
            </Grid>
          </Grid>
        </Card>
        <Card
          style={{
            backgroundColor: "#f39c12",
            padding: 20,
            width: 200,
            marginTop: 20,
          }}
        >
          <Grid container className={classes.wrapRight}>
            <Grid item>
              <Typography variant="p">Chủ thẻ mới</Typography>
              <Typography variant="h5"> 50 thẻ</Typography>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Paper>
  );
};

export default DoughnutChart;

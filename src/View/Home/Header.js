import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button, Grid, Paper, Card, Typography } from "@material-ui/core";

import PeopleIcon from "@material-ui/icons/People";
import DomainIcon from "@material-ui/icons/Domain";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EmailIcon from "@material-ui/icons/Email";
import { toPriceVnd } from "../../config/Function";

const Header = (props) => {
  const { data } = props;
  if (data)
    return (
      <Grid
        container
        justifyContent={"space-between"}
        direction="row"
        spacing={3}
      >
        <Grid item lg={2} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#0066FF",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="p">Nhà đầu tư mới</Typography>
                <Typography variant="h5">
                  {" "}
                  {data.total_new_user} người{" "}
                </Typography>
              </Grid>

              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item lg={2} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#01C2ED",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="p">Đề nghị vay hôm qua</Typography>
                <Typography variant="h5">
                  {" "}
                  {data.total_loan_yesterday} thẻ
                </Typography>
                <Typography variant="h5">
                  {toPriceVnd(data.total_loan_value_yesterday)} đ
                </Typography>
              </Grid>

              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item lg={2} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#28B252",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="p">Đề nghị vay hôm nay</Typography>
                <Typography variant="h5"> {data.total_loan_now} thẻ</Typography>
                <Typography variant="h5">
                  {toPriceVnd(data.total_loan_value_now)} đ
                </Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item lg={2} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#FFAC2F",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="p">Đề nghị vay ngày mai</Typography>
                <Typography variant="h5">
                  {" "}
                  {data.total_loan_tomorrow} thẻ
                </Typography>
                <Typography variant="h5">
                  {toPriceVnd(data.total_loan_value_tomorrow)} đ
                </Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item lg={2} md={6} sm={12}>
          <Card
            style={{
              backgroundColor: "#E4483B",
              paddingTop: 20,
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ color: "white", paddingLeft: 10, paddingRight: 10 }}
            >
              <Grid item>
                <Typography variant="p">Chờ phê duyệt</Typography>
                <Typography variant="h5">
                  {" "}
                  {data.total_loan_wait_approve} thẻ
                </Typography>
                <Typography variant="h5">
                  {toPriceVnd(data.total_loan_value_wait_approve)} đ
                </Typography>
              </Grid>
              <Grid item>
                <DomainIcon
                  style={{
                    width: 100,
                    height: 100,
                    color: "rgba(0,0,0,0.15)",
                  }}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  return null;
};

export default Header;

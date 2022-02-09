import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";

import DrawerView from "./Drawer";
import Login from "./Authen/Login";
import ForgotPassword from "./Authen/ForgotPassword";
import ConfirmOTP from "./Authen/ConfirmOTP";
import ConfirmPass from "./Authen/ConfirmPass";
import ChangePassword from "./Authen/ChangePass";

import Dashboard from "./Home/Home";
import Employee from "./Employee/Employee";
import CreateEmployee from "./Employee/CreateEmployee";
import UpdateEmployee from "./Employee/UpdateEmployee";

import { useSnackbar } from "notistack";
import { combineLatest } from "rxjs";
import KEY from "../assets/Key";

const RootView = (props) => {
  function PrivateRoute({ children, ...rest }) {
    let accessToken = localStorage.getItem(KEY.API_TOKEN);

    return (
      <Route
        {...rest}
        render={({ location }) =>
          accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ children, ...rest }) {
    let accessToken = localStorage.getItem(KEY.API_TOKEN);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !accessToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  const publicRouter = [
    "/",
    "/forgot-password",
    "/confirm-otp",
    "/confirm-password",
    "/home",
    "/accounts",
    "/change-password",
    "/gate-payment",
  ];
  const { enqueueSnackbar } = useSnackbar();

  const location = useLocation();
  const history = useHistory();

  // useEffect(() => {
  //   let temp = localStorage.getItem(KEY.LISTPATH);
  //   let listPath = JSON.parse(temp);
  //   if (listPath) {
  //     let result = listPath.findIndex((e) => e.path == location.pathname);
  //     if (result == -1 && publicRouter.indexOf(location.pathname) == -1) {
  //       history.push("/home");
  //       enqueueSnackbar("Bạn không có quyền truy cập!", { variant: "warning" });
  //     }
  //   }
  // }, [location]);
  return (
    <Switch>
      <PublicRoute exact={true} path="/">
        <Login />
      </PublicRoute>
      <PublicRoute exact={true} path="/forgot-password">
        <ForgotPassword />
      </PublicRoute>
      <PublicRoute exact={true} path="/confirm-otp">
        <ConfirmOTP />
      </PublicRoute>
      <PublicRoute exact={true} path="/confirm-password">
        <ConfirmPass />
      </PublicRoute>

      <DrawerView>
        <PrivateRoute exact={true} path="/employee">
          <Employee />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/employee/create-employee">
          <CreateEmployee />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/employee/update-employee">
          <UpdateEmployee />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/change-password">
          <ChangePassword />
        </PrivateRoute>
      </DrawerView>
    </Switch>
  );
};

export default RootView;

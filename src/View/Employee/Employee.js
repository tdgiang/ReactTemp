import React, { useState, useEffect } from "react";

import ToolUserView from "./EmployeeView";

import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import KEY from "../../assets/Key";
import { connect } from "react-redux";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import {
  getListEmployees,
  deleteEmployee,
  updateEmployee,
  changeStatusEmployee,
} from "../../apis/Functions/Employee";

const ToolNotificate = (props) => {
  const [txtSearch, setTxtSearch] = useState("");
  const [activeSelected, setActiveSeleted] = useState(null);
  const [changeActive, setChangeActive] = useState(1);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize] = useState(10);
  const [totalRecords, setTotalRecord] = useState(0);

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const [data, setData] = useState([]);
  const [permissions, setPermissions] = useState([]);
  useEffect(() => {
    getListPermission();
  }, []);
  const getListPermission = () => {
    let temp = localStorage.getItem(KEY.LISTPATH);
    let listPath = JSON.parse(temp);
    if (listPath) {
      const newlist = listPath.map((e) => {
        if (e.function_code) return e.function_code;
        return e.action_code;
      });
      setPermissions(newlist);
    }
  };

  const handeChangeActive = async (id, status_id) => {
    props.showLoading();
    const res = await changeStatusEmployee({ id, status_id });

    props.hideLoading();
    if (res.data.code == 200) {
      getData();
      enqueueSnackbar("Thay đổi trạng thái thành công", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Thay đổi trạng thái thất bại", {
        variant: "error",
      });
    }
  };

  const getData = async () => {
    props.showLoading();
    let temp = localStorage.getItem(KEY.USERINFOR);
    let userInfor = JSON.parse(temp);
    const res = await getListEmployees({
      full_name: txtSearch,
      page_no: pageIndex + 1,
      page_size: pageSize,
      status: activeSelected,
      userGroupId: userInfor.group_id == 33 ? null : userInfor.group_id,
    });
    props.hideLoading();
    if (res.data.code == 200 && res.data.data) {
      const newList = res.data.data.data.map((e, i) => {
        return { ...e, index: i + 1 + pageIndex * pageSize };
      });

      setData(newList);
      setTotalRecord(res.data.data.total_elements);
    } else if (res.data.code == 401) {
      localStorage.removeItem(KEY.API_TOKEN);
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      enqueueSnackbar("Error!", { variant: "error" });
    }
  };

  useEffect(() => {
    getData();
  }, [txtSearch, pageIndex, activeSelected]);

  const removeItem = async (id) => {
    props.showLoading();
    const res = await deleteEmployee({ id: id });
    props.hideLoading();
    if (res.data.code == 200) {
      getData();
      enqueueSnackbar("Xoá nhân viên thành công!", { variant: "success" });
    } else if (res.data.code == 401) {
      localStorage.removeItem(KEY.API_TOKEN);
      setTimeout(() => {
        history.push("/");
      }, 100);
    } else {
      enqueueSnackbar("Xoá nhân viên thất bại!", { variant: "error" });
    }
  };

  return (
    <ToolUserView
      data={data}
      removeItem={removeItem}
      setTxtSearch={setTxtSearch}
      setActiveSeleted={setActiveSeleted}
      pageIndex={pageIndex}
      changeActive={changeActive}
      setChangeActive={setChangeActive}
      setPageIndex={setPageIndex}
      activeSelected={activeSelected}
      handeChangeActive={handeChangeActive}
      totalRecords={totalRecords}
      permissions={permissions}
    />
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  ToolNotificate
);

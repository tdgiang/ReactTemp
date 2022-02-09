import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Modal, Avatar, Backdrop, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 400,
    maxWidth: 450,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 100px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
}));

export default function CreateDeparment(props) {
  const classes = useStyles();
  const { open, handleClose, data } = props;
  const [personName, setPersonName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <React.Fragment>
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
        {data ? (
          <div className={classes.formControl}>
            <Avatar alt="" src={data.logo} className={classes.logo} />
            <div>
              <p>Tên đăng nhập:  </p>
              <p>Họ và tên</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </React.Fragment>
  );
}

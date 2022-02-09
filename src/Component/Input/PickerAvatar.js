import React from "react";
import { Avatar, Typography, Badge } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { apiUploadFile } from "../../apis/Functions/Upload";
import { useSnackbar } from "notistack";
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { connect } from "react-redux";

function UploadButtons(props) {
  const { image, onFileChange } = props;

  const { enqueueSnackbar } = useSnackbar();
  const upLoadImage = async (event) => {
    props.showLoading();
    const res = await apiUploadFile(createFormData(event.target.files[0], {}));
    props.hideLoading();
    if (res.data.code == "OK" && res.data.data) {
      onFileChange(res.data.data[0].url);
      enqueueSnackbar("Upload ảnh thành công!", { variant: "success" });
    } else {
      enqueueSnackbar("Upload ảnh thất bại!", { variant: "error" });
    }
  };

  const createFormData = (photo, body) => {
    const data = new FormData();
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    if (photo) {
      data.append("files", photo);
    }
    return data;
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="contained-button-file"
        onChange={upLoadImage}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={<PhotoCamera />}
        >
          <Avatar
            src={image}
            style={{
              width: 100,
              height: 100,
              cursor: "pointer",
            }}
          />
        </Badge>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { showLoading, hideLoading })(
  UploadButtons
);

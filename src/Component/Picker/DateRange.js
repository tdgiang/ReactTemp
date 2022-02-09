import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { DateRangePicker } from "react-date-range";
import { convertDate } from "../../config/Function";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleSelect = (date) => {
    setSelectionRange(date.range1);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onPress = () => {
    props.changeDateRange(selectionRange.startDate, selectionRange.endDate);
    setAnchorEl(null);
  };
  const onCancel = () => {
    props.changeDateRange(null, null);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        style={{
          padding: 10,
          height: 43,
        }}
        variant={"outlined"}
        onClick={handleClick}
      >
        {props.date ? (
          <p>
            {convertDate(selectionRange.startDate)} -{" "}
            {convertDate(selectionRange.endDate)}{" "}
          </p>
        ) : (
          <Typography variant={"caption"}>dd/MM/YYYY - dd/MM/YYYY</Typography>
        )}
      </Button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <div
          style={{
            justifyContent: "right",
            alignItems: "flex-end",
            display: "flex",
            paddingRight: 10,
            paddingBottom: 15,
          }}
        >
          <Button
            style={{
              width: 100,
              height: 30,
              marginRight: 20,
            }}
            onClick={() => onCancel()}
            variant="contained"
          >
            <Typography variant={"caption"}>Huỷ</Typography>
          </Button>
          <Button
            style={{
              width: 100,
              height: 30,
            }}
            onClick={() => onPress()}
            variant="contained"
            color="primary"
          >
            <Typography variant={"caption"}>Áp dụng</Typography>
          </Button>
        </div>
      </Popover>
    </div>
  );
}

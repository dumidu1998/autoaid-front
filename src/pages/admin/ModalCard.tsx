import { withCardon } from "cardon";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import React from "react";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",

    // width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

interface Props {
  title: string;
}

export default withCardon<Props, boolean>(function ModalCard({
  visible,
  get,
  title
}) {
  const classes = useStyles();
  return (
    <Modal
      open={visible}
      onClose={get()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        style={{
          left: 100,
          right: 100,
          top: "30%"
        }}
        className={classes.paper}
      >
        <h2 id="simple-modal-title">{title}</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          <div style={{ display: "flex" }}>
            <Button onClick={get(true)} variant="contained" color="primary">
              Yes
            </Button>
            <Button onClick={get(false)} variant="contained" color="secondary">
              No
            </Button>
          </div>
        </p>
      </div>
    </Modal>
  );
});

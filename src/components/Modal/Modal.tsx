import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import Button from '@mui/material/Button';
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

type ModalProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  open: boolean;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{children}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            А тут подробное описание про это модальное окно
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

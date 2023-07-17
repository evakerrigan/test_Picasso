import { Box } from "@mui/material";
import "./Modal.css";
import Button from '@mui/material/Button';

type ModalProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <Box className="modal">
      <Box>{children}</Box>
      <Button variant="contained" onClick={(event) => onClose(event)}>Close</Button>
    </Box>
  )
};

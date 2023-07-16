import "./Modal.css";

type ModalProps = {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="modal">
      <div>{children}</div>
      <button onClick={(event) => onClose(event)}>Close</button>
    </div>
  )
};

import Backdrop from "@mui/material/Backdrop";

interface BackDropProps {
  onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 0 }}
      open={true}
      onClick={onClick}
    ></Backdrop>
  );
};

export default BackDrop;

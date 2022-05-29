import { IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";

export default function Header({
  onClickMenuButton
}: {
  onClickMenuButton: () => void;
}) {
  return (
    <>
      <p>ようこそ</p>
      <IconButton onClick={onClickMenuButton}>
        <Menu />
      </IconButton>
    </>
  );
}

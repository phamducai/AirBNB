import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "./NavBar.module.css";
import clsx from "clsx";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "40px",
          width: "fit-content",
          marginLeft: "auto",
        }}
        className={clsx(styles.profile_menu_flex)}
      >
        <MenuIcon /> <AccountCircleIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          ".MuiPaper-root": {
            borderRadius: "1rem",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
            minWidth: "200px",
            marginTop: "0.75rem",
          },
        }}
      >
        <MenuItem className={clsx(styles.menu_items)} onClick={handleClose}>
          Đăng Ký
        </MenuItem>
        <MenuItem className={clsx(styles.menu_items)} onClick={handleClose}>
          Đăng Nhập
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        ></div>
        <MenuItem className={clsx(styles.menu_items)} onClick={handleClose}>
          Tổ chức trải nghiệm
        </MenuItem>
        <MenuItem className={clsx(styles.menu_items)} onClick={handleClose}>
          Cho thuê chỗ ở qua airbnb
        </MenuItem>
        <MenuItem className={clsx(styles.menu_items)} onClick={handleClose}>
          Trợ Giúp
        </MenuItem>
      </Menu>
    </div>
  );
}

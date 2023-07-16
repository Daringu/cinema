import { NavLink } from "react-router-dom";

import styles from "./sidebarNavLink.module.css";
import { memo } from "react";
const NavLinkCustom = memo(function SideBarNavLink({
  Icon = null,
  children,
  direction
}) {
  return (
    <NavLink
      onClick={(e) => e.stopPropagation()}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? [styles.active, styles.navBarLink].join(" ")
          : styles.navBarLink
      }
      to={direction}
    >
      {Icon && <Icon />}
      <p className={styles.text}>{children}</p>
    </NavLink>
  );
});
export default NavLinkCustom;

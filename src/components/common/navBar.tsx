import Link from "next/link";

import styles from "./styles/navBar.module.css";

const NavBar = (props: { active: string }) => {
  const { active } = props;

  return (
    <>
      <div className={styles.nav_container}>
        <nav className={styles.navbar}>
          <div className={styles.nav_background}>
            <ul className={styles.nav_list}>
              <li
                className={
                  active === "home"
                    ? `${styles.nav_item} ${styles.active}`
                    : styles.nav_item
                }
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={
                  active === "about"
                    ? `${styles.nav_item} ${styles.active}`
                    : styles.nav_item
                }
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects"
                    ? `${styles.nav_item}  ${styles.active}`
                    : styles.nav_item
                }
              >
                <Link href="/projects">Projects</Link>
              </li>

              <li
                className={
                  active === "contact"
                    ? `${styles.nav_item} ${styles.active}`
                    : styles.nav_item
                }
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;

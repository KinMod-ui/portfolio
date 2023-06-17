import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles/logo.module.css";

const Logo = (props: { width: number; link: boolean }) => {
  let { link } = props;
  const width = props.width;

  if (link === undefined) {
    link = true;
  }

  return (
    <React.Fragment>
      {link ? (
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className={styles.logo}
            width={width}
            height={width}
          />
        </Link>
      ) : (
        <Image
          src="/logo.png"
          alt="logo"
          className={styles.logo}
          width={width}
          height={width}
        />
      )}
    </React.Fragment>
  );
};

export default Logo;

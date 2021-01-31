import { FC } from "react";
import NextLink from "next/link";
import styles from "../styles/navbar.module.css";
import { useSession } from "next-auth/client";
const Navbar: FC<{ links?: { name: string; link: string }[] }> = ({
  links,
}) => {
  const [session, loading] = useSession();

  return (
    <nav className={styles.nav}>
      <div className={`${styles.links} container`}>
        {links && links.length > 0
          ? links.map((link) => (
              <NextLink key={link.name} href={link.link}>
                <a>{link.name}</a>
              </NextLink>
            ))
          : null}
        <NextLink href={session ? "/dashboard" : "/signin"}>
          <a>{session ? "Dashboard" : "Signin"}</a>
        </NextLink>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  links: [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
  ],
};
export default Navbar;

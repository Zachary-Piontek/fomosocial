import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import { SignInButton, SignOutButton } from "../../components/buttons";
import AuthCheck from "../../components/AuthCheck";
import DarkModeButton from "../../components/DarkModeButton";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          src="/chasing-bitcoin-min.png"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
      <h1>Crypto.Blogs</h1>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
        <li>
          <DarkModeButton />
        </li>
      </ul>
    </nav>
  );
}

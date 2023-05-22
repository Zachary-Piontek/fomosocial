import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import { SignInButton } from "../../components/buttons";

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image src="/chasing-bitcoin-min.png" alt="logo" width={50} height={50} />
            </Link>
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
            </ul>
        </nav>
    );
}
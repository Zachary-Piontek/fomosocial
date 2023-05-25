import { prisma } from "../../../lib/prisma";
import UserCard from "../../../components/UserCard/UserCard";
import styles from "./page.module.css";

export default async function Users() {
  // throw new Error("Oops!"); testing error page
  const users = await prisma.user.findMany();

  return (
    <main>
      <div className={styles.grid}>
        <h1>Users page</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
}

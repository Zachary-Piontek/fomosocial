import { prisma } from "../../../../lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  return {
    title: `${user?.name}'s profile`,
  };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  const { name, bio, image } = user ?? {};

  return (
    <main>
      <div className={styles.page}>
        <h1>{name}</h1>
        <Image
          src={image ?? "/favicon.ico"}
          alt={`${name}'s profile`}
          width={200}
          height={200}
        />
        <h2>Bio</h2>
        <p>{bio}</p>
      </div>
    </main>
  );
}

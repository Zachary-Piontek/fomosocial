import styles from "./page.module.css";

export default async function AboutPage() {
  return (
    <main>
      <div className={styles.container}>
        <h1>About This Blog</h1>
        <p>
          Welcome to the Next.js 13 Crypto Blog App, your go-to platform for
          staying updated on the latest news and insights in the world of
          cryptocurrencies, featuring comprehensive coverage and real-time
          market data. Join our community of crypto enthusiasts today!
        </p>
      </div>
    </main>
  );
}

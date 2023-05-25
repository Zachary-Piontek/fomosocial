import Link from "next/link";
import UploadBlogForm from "../../../components/UploadBlog";

export default async function Blog() {
  const posts = await fetch("http://localhost:3000/api/content").then((res) =>
    res.json()
  );
  return (
    <main>
      <div>
        <h1>Welcome to our Blog</h1>
        <UploadBlogForm />
        <ul>
          {posts.map((post: any) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

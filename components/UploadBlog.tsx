"use client";
import { useState } from "react";

export default function UploadBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const newBlog = await res.json();
    console.log(newBlog);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Upload Blog</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Upload</button>
    </form>
  );
}

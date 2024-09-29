import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("contents/", "utf-8");

const blogs = dirContent
  .map((file) => {
    const fileContent = fs.readFileSync(`contents/${file}`, "utf-8");
    const { data } = matter(fileContent);
    // Check if the blog post belongs to semester 1
    if (data.semester === 1) {
      return data;
    } else {
      return null; // Return null for posts that don't belong to semester 1
    }
  })
  .filter((blog) => blog !== null); // Filter out null entries

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 *
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Semester-01</h1>
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md overflow-hidden  dark:border-2 bg-cardlight dark:bg-carddark"
          >
            {/* Blog post image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            {/* Blog post content */}
            <div className="p-4 text-center">
              {/* Blog post title */}
              <Link href={`/blogpost/${blog.slug}`}>
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;

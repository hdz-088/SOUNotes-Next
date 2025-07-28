import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

// Define the path to the contents directory
const contentDirectory = path.join(process.cwd(), "contents");

// This function runs on the server and fetches the data
export default async function BlogPage() {
  // Read the contents of the directory
  const dirContent = fs.readdirSync(contentDirectory);

  const blogs = dirContent
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      // Check if the blog post belongs to semester 1
      if (data.semester === 2) {
        return { ...data, slug: file.replace(".md", "") }; // Include slug for links
      }
      return null; // Return null for posts that don't belong to semester 1
    })
    .filter((blog) => blog !== null); // Filter out null entries

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
        Semester-02
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {blogs.map((blog) => (
          <Link href={`/blogpost/${blog.slug}`} key={blog.slug}>
            <div className="h-80 w-60 bg-white rounded-lg shadow-lg flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
              <div>
                <small
                  className="text-[9px] font-bold opacity-50"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  BCA-II
                </small>
                <p
                  className="font-bold text-4xl text-[#632DB5]"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  {blog.header}
                </p>
                <small
                  className="text-[9px] font-bold text-[#632DB5] opacity-50"
                  style={{ color: blog.accent || "#ce9fc1" }}
                >
                  SOUNotes
                </small>
              </div>
              <Image
                src={blog.image}
                alt={blog.title}
                width={170}
                height={170}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

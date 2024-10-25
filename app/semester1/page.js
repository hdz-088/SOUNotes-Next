// import Link from "next/link";
// import Image from "next/image";

// const chaptersData = [
//   {
//     title: "DBMS-SY",
//     link: "/blogpost/dbms-syllabus",
//     image: "/dbms.jpg",
//     accent: "#632db5",
//   },
//   {
//     title: "DM-SY",
//     link: "/blogpost/dm-syllabus",
//     image: "/dm.jpg",
//     accent: "#45b181",
//   },
//   {
//     title: "ECS-SY",
//     link: "/blogpost/ecs-syllabus",
//     image: "/ecs.png",
//     accent: "#4364cf",
//   },
//   {
//     title: "LDP-SY",
//     link: "/blogpost/ldp-syllabus",
//     image: "/ldp.jpg",
//     accent: "#385a64",
//   },
//   {
//     title: "OA-SY",
//     link: "/blogpost/oa-syllabus",
//     image: "/oa.jpg",
//     accent: "#ff735c",
//   },
//   {
//     title: "WD-SY",
//     link: "/blogpost/wd-syllabus",
//     image: "/webdesign.jpg",
//     accent: "#c3b134",
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main heading for the blog section */}
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
//         Semester-01
//       </h1>

//       {/* Grid layout for blog posts */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
//         {chaptersData.map((chapter, index) => (
//           <Link href={chapter.link} key={index}>
//             <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
//               <div>
//                 <small
//                   className="text-[9px] font-bold opacity-50"
//                   style={{ color: chapter.accent }}
//                 >
//                   BCA-I
//                 </small>
//                 <p
//                   className="font-bold text-4xl text-[#632DB5]"
//                   style={{ color: chapter.accent }}
//                 >
//                   {chapter.title}
//                 </p>
//                 <small
//                   className="text-[9px] font-bold text-[#632DB5] opacity-50"
//                   style={{ color: chapter.accent }}
//                 >
//                   SOUNotes
//                 </small>
//               </div>
//               <Image
//                 src={chapter.image}
//                 width={170}
//                 height={170}
//                 alt={chapter.title}
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

// import React from "react";
// import Link from "next/link";
// import fs from "fs";
// import matter from "gray-matter";

// const dirContent = fs.readdirSync("contents/", "utf-8");

// const blogs = dirContent
//   .map((file) => {
//     const fileContent = fs.readFileSync(`contents/${file}`, "utf-8");
//     const { data } = matter(fileContent);
//     // Check if the blog post belongs to semester 1
//     if (data.semester === 1) {
//       return data;
//     } else {
//       return null; // Return null for posts that don't belong to semester 1
//     }
//   })
//   .filter((blog) => blog !== null); // Filter out null entries

// /**
//  * Blog component that renders a list of blog posts.
//  * Each blog post includes an image, title, description, author, date, and a link to the full post.
//  *
//  * @returns {JSX.Element} The rendered blog component.
//  */
// const Blog = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main heading for the blog section */}
//       <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
//         Semester-01
//       </h1>

//       {/* Grid layout for blog posts */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
//         {blogs.map((blog, index) => (
//           <Link href={`/blogpost/${blog.slug}`} key={blog.title}>
//             <div
//               key={index}
//               className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110"
//             >
//               <small
//                 className="text-[9px] font-bold opacity-50"
//                 style={{ color: blog.accent }}
//               >
//                 BCA-I
//               </small>
//               <p
//                 className="font-bold text-4xl text-[#632DB5]"
//                 style={{ color: blog.accent }}
//               >
//                 {blog.header}
//               </p>
//               <small
//                 className="text-[9px] font-bold text-[#632DB5] opacity-50"
//                 style={{ color: blog.accent }}
//               >
//                 SOUNotes
//               </small>
//               <img src={blog.image} alt={blog.title} width={170} height={170} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Blog;

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
      if (data.semester === 1) {
        return { ...data, slug: file.replace(".md", "") }; // Include slug for links
      }
      return null; // Return null for posts that don't belong to semester 1
    })
    .filter((blog) => blog !== null); // Filter out null entries

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
        Semester-01
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
                  BCA-I
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

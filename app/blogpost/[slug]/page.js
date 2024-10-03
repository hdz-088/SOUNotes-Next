// import fs from "fs";
// import matter from "gray-matter";
// import { notFound } from "next/navigation";
// import rehypeDocument from "rehype-document";
// import rehypeFormat from "rehype-format";
// import rehypeStringify from "rehype-stringify";
// import remarkParse from "remark-parse";
// import rehypeRaw from "rehype-raw";
// import remarkGfm from "remark-gfm";
// import remarkRehype from "remark-rehype";
// import { unified } from "unified";
// import rehypePrettyCode from "rehype-pretty-code";
// import { transformerCopyButton } from "@rehype-pretty/transformers";
// import OnThisPage from "@/components/onthispage";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypeSlug from "rehype-slug";

// export default async function Page({ params }) {
//   const filepath = `contents/${params.slug}.md`;

//   if (!fs.existsSync(filepath)) {
//     notFound();
//     return;
//   }

//   const fileContent = fs.readFileSync(filepath, "utf-8");
//   const { content, data } = matter(fileContent);

//   const processor = unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(remarkGfm)
//     .use(rehypeDocument, { title: "👋🌍" })
//     .use(rehypeFormat)
//     .use(rehypeRaw)
//     .use(rehypeStringify)
//     .use(rehypeSlug)
//     .use(rehypeAutolinkHeadings)
//     .use(rehypePrettyCode, {
//       theme: "catppuccin-macchiato",
//       transformers: [
//         transformerCopyButton({
//           visibility: "always",
//           feedbackDuration: 3_000,
//         }),
//       ],
//     });

//   const htmlContent = (await processor.process(content)).toString();

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <p className="text-4xl font-bold mb-4">
//         <font color="#ce9fc1">{data.title}</font>
//       </p>
//       {/* <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
//         <a href={data.link} target="_blank">
//           Download PDF
//         </a>
//       </p> */}
//       <a href={data.link} target="_blank">
//         <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
//           <img src="/pdf.png" width="20px" />
//           Download PDF
//         </button>
//       </a>
//       {/* <div className="flex gap-2">
//         <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
//         <p className="text-sm text-gray-500 mb-4">{data.date}</p>
//       </div> */}
//       <div
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//         className="prose dark:prose-invert"
//       ></div>
//       <OnThisPage htmlContent={htmlContent} />
//     </div>
//   );
// }

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import OnThisPage from "@/components/onthispage";

// Define the contents directory
const contentDirectory = path.join(process.cwd(), "contents");

// Generate the static paths for all available blog posts (equivalent to getStaticPaths)
export async function generateStaticParams() {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""), // Remove the .md extension for the slug
  }));
}

// This function runs on the server and fetches the data
export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const filepath = path.join(contentDirectory, `${slug}.md`);

  // If the file doesn't exist, return a 404
  if (!fs.existsSync(filepath)) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent); // Extract the front matter and content

  // Use unified processor to convert markdown to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(remarkGfm)
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "catppuccin-macchiato",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <p className="text-4xl font-bold mb-4">
        <font color="#ce9fc1">{data.title}</font>
      </p>
      <div className="flex flex-row gap-5">
        <a href={data.link} target="_blank">
          <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
            <img src="/pdf.png" width="20px" />
            Download PDF
          </button>
        </a>
        <a href={"https://forms.gle/XhAYp8GPS54D6TkRA"} target="_blank">
          <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
            <img src="/form.png" width="20px" />
            Feedback
          </button>
        </a>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}

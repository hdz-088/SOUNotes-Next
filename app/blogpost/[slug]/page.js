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
import { MessageCircle } from "lucide-react";

const contentDirectory = path.join(process.cwd(), "contents");

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const filenames = fs.readdirSync(contentDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// This function runs on the server and fetches the data
export default async function BlogPostPage({ params }) {
  const { slug } = params; // Destructure slug from params
  const filePath = path.join(contentDirectory, `${slug}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return {
      notFound: true, // Return 404 if the file is not found
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent); // Extract the front matter and content

  // Convert markdown to HTML
  const htmlContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(remarkParse)
    .use(remarkGfm) // Ensure GFM support is before rehype
    .use(remarkRehype)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeDocument, { title: data.title })
    .use(rehypeFormat)
    .use(rehypeRaw)
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
    })
    .use(rehypeStringify)
    .process(content)
    .then((file) => String(file));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4" style={{ color: "#ce9fc1" }}>
        {data.title}
      </h1>
      <div className="flex flex-row gap-5 mb-4 justify-center sm:justify-start">
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
              <img src="/pdf.png" width="30px" alt="Download PDF" />
              <p className="hidden md:block">Download PDF</p>
            </button>
          </a>
        )}
        <a
          href={"https://forms.gle/XhAYp8GPS54D6TkRA"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
            <img src="/form.png" width="30px" alt="Feedback" />
            <p className="hidden md:block">Feedback</p>
          </button>
        </a>
        {/* Contribution by @Dhvanitmonpara */}
        <a
          href={`https://chatgpt.com/?hints=search&prompt=Read+'https%3A%2F%2Fsounotes.vercel.app%2Fblogpost/${encodeURIComponent(
            data.slug
          )}'+%20I+want+to+ask+questions+about+it.`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex gap-2 bg-carddark px-4 py-2 rounded-full text-white">
            <img src="/cyan.png" width="30px" alt="ChatGPT" />
            <p className="hidden md:block">Open with ChatGPT</p>
          </button>
        </a>
      </div>
      <div className="flex flex-col sm:flex-row-reverse sm:justify-between sm:gap-14">
        <OnThisPage htmlContent={htmlContent} />
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert"
        />
      </div>
    </div>
  );
}

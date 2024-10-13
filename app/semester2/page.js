import Link from "next/link";
import Image from "next/image";

const chaptersData = [
  {
    title: "AWD-01",
    link: "/blogpost/AWD-01",
    image: "/awd.png",
    accent: "#fd8773",
  },
  {
    title: "AWD-02",
    link: "/blogpost/AWD-02",
    image: "/awd.png",
    accent: "#fd8773",
  },
  {
    title: "AWD-03",
    link: "/blogpost/AWD-03",
    image: "/awd.png",
    accent: "#fd8773",
  },
  {
    title: "AWD-04",
    link: "/blogpost/AWD-04",
    image: "/awd.png",
    accent: "#fd8773",
  },
  {
    title: "ECS-01",
    link: "/blogpost/ECS-01",
    image: "/ECS.png",
    accent: "#4364cf",
  },
  {
    title: "ECS-02",
    link: "/blogpost/ECS-02",
    image: "/ECS.png",
    accent: "#4364cf",
  },
  {
    title: "ECS-03",
    link: "/blogpost/ECS-03",
    image: "/ECS.png",
    accent: "#4364cf",
  },
  {
    title: "ECS-04",
    link: "/blogpost/ECS-04",
    image: "/ECS.png",
    accent: "#4364cf",
  },
  {
    title: "OOPC-01",
    link: "/blogpost/OOPC-01",
    image: "/OOPC.png",
    accent: "#45b183",
  },
  {
    title: "OOPC-02",
    link: "/blogpost/OOPC-02",
    image: "/OOPC.png",
    accent: "#45b183",
  },
  {
    title: "OOPC-03",
    link: "/blogpost/OOPC-03",
    image: "/OOPC.png",
    accent: "#45b183",
  },
  {
    title: "OOPC-04",
    link: "/blogpost/OOPC-04",
    image: "/OOPC.png",
    accent: "#45b183",
  },
  {
    title: "PCMT-01",
    link: "/blogpost/PCMT-01",
    image: "/PCMT.png",
    accent: "#e5adee",
  },
  {
    title: "PCMT-02",
    link: "/blogpost/PCMT-02",
    image: "/PCMT.png",
    accent: "#e5adee",
  },
  {
    title: "PCMT-03",
    link: "/blogpost/PCMT-03",
    image: "/PCMT.png",
    accent: "#e5adee",
  },
  {
    title: "PCMT-04",
    link: "/blogpost/PCMT-04",
    image: "/PCMT.png",
    accent: "#e5adee",
  },
  {
    title: "RDBMS-01",
    link: "/blogpost/RDBMS-01",
    image: "/RDBMS.png",
    accent: "#254753",
  },
  {
    title: "RDBMS-02",
    link: "/blogpost/RDBMS-02",
    image: "/RDBMS.png",
    accent: "#254753",
  },
  {
    title: "RDBMS-03",
    link: "/blogpost/RDBMS-03",
    image: "/RDBMS.png",
    accent: "#254753",
  },
  {
    title: "RDBMS-04",
    link: "/blogpost/RDBMS-04",
    image: "/RDBMS.png",
    accent: "#254753",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
        Semester-02
      </h1>

      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {chaptersData.map((chapter, index) => (
          <Link href={chapter.link} key={index}>
            <div className="h-80 w-60 bg-white rounded-l rounded-r-2xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border flex flex-col text-center px-2 py-4 items-center justify-between cursor-pointer transform transition-transform duration-300 hover:scale-110">
              <div>
                <small
                  className="text-[9px] font-bold opacity-50"
                  style={{ color: chapter.accent }}
                >
                  BCA-II
                </small>
                <p
                  className="font-bold text-4xl text-[#632DB5]"
                  style={{ color: chapter.accent }}
                >
                  {chapter.title}
                </p>
                <small
                  className="text-[9px] font-bold text-[#632DB5] opacity-50"
                  style={{ color: chapter.accent }}
                >
                  SOUNotes
                </small>
              </div>
              <Image
                src={chapter.image}
                width={170}
                height={170}
                alt={chapter.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

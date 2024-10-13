import Link from "next/link";
import Image from "next/image";

const chaptersData = [
  {
    title: "DBMS-SY",
    link: "/blogpost/DBMS-Syllabus",
    image: "/dbms.jpg",
    accent: "#632db5",
  },
  {
    title: "DM-SY",
    link: "/blogpost/DM-Syllabus",
    image: "/dm.jpg",
    accent: "#45b181",
  },
  {
    title: "ECS-SY",
    link: "/blogpost/ECS-Syllabus",
    image: "/ecs.png",
    accent: "#4364cf",
  },
  {
    title: "LDP-SY",
    link: "/blogpost/LDP-Syllabus",
    image: "/ldp.jpg",
    accent: "#385a64",
  },
  {
    title: "OA-SY",
    link: "/blogpost/OA-Syllabus",
    image: "/oa.jpg",
    accent: "#ff735c",
  },
  {
    title: "WD-SY",
    link: "/blogpost/WD-Syllabus",
    image: "/webdesign.jpg",
    accent: "#c3b134",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ce9fc1]">
        Semester-01
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
                  BCA-I
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

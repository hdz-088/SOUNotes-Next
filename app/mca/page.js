import SemesterCard from "@/components/ui/semesterCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 font-syne">
          MCA (2026-28) Study Material
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-20 place-items-center justify-center items-center">
        <SemesterCard href="/mca1" label="Semester-01" />
        {/* <SemesterCard href="/semester2" label="Semester-02" />
        <SemesterCard href="/semester3" label="Semester-03" />
        <SemesterCard href="/semester4" label="Semester-04" /> */}
      </div>
    </div>
  );
}

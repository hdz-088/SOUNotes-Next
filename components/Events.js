import { useEffect, useState } from "react";

const events = [
  {
    title: "Makarsankranti",
    from: "2025-01-14",
    to: "2025-01-15",
    type: "holiday",
    description: "Makarsankranti Holiday",
  },
  {
    title: "Intermediate Assessment Exam",
    from: "2025-02-03",
    to: "2025-02-15",
    type: "exams",
    description: "Intermediate Assessment Exams Sem 4/6/8",
  },
  {
    title: "Maha Shivratri",
    from: "2025-02-26",
    to: "2025-02-26",
    type: "holiday",
    description: "Maha Shivratri Holiday",
  },
  {
    title: "Holi",
    from: "2025-03-14",
    to: "2025-03-14",
    type: "holiday",
    description: "",
  },
  {
    title: "Ramazan Eid",
    from: "2025-03-31",
    to: "2025-03-31",
    type: "holiday",
    description: "",
  },
  {
    title: "Mid-Semester Exams",
    from: "2025-04-01",
    to: "2025-04-07",
    type: "exams",
    description: "Mid-Semester Exaination",
  },
  {
    title: "Mid-Semester Result",
    from: "2025-04-12",
    to: "2025-04-12",
    type: "result",
    description: "Mid-Semester Exam Result Declaration",
  },
  {
    title: "Ambedkar Jayanti",
    from: "2025-04-14",
    to: "2025-04-14",
    type: "holiday",
    description: "Dr. Baba Saheb Ambedkar Jayanti",
  },
  {
    title: "Various Exams",
    from: "2025-04-17",
    to: "2025-04-24",
    type: "exams",
    description: "Mid Semester Remedial Exams, Internal Submission, VIVA Exams",
  },
  {
    title: "Term End",
    from: "2025-04-24",
    to: "2025-04-24",
    type: "term",
    description: "Term End For Even Semester",
  },
  {
    title: "Mid-Sem Remedial Result",
    from: "2025-04-30",
    to: "2025-04-30",
    type: "result",
    description: "Mid-Semester Remedial Exam Results",
  },
  {
    title: "End-Semester Exams",
    from: "2025-05-01",
    to: "2025-05-24",
    type: "exams",
    description: "End Semester Regular/Remedial Exams of Semester 4,6,8",
  },
  {
    title: "End Semester Practical Exams",
    from: "2025-05-25",
    to: "2025-06-06",
    type: "exams",
    description: "End Semester Practical Exams",
  },
  {
    title: "End Semester Remedial Exam",
    from: "2025-05-26",
    to: "2025-06-14",
    type: "exams",
    description: "End Semester Remedial Exams of Semester 1,3,5,7",
  },
];

export default function EventList() {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const today = new Date();

    // Filter out events that have already passed
    const upcomingEvents = events.filter(
      (event) => new Date(event.to) >= today
    );
    setFilteredEvents(upcomingEvents);
  }, []);

  const getTitleColor = (type) => {
    switch (type) {
      case "holiday":
        return "text-[#fd5f5f]";
      case "term":
        return "text-[#d373ff]";
      case "exams":
        return "text-[#14a82d]";
      case "result":
        return "text-[#1da5f4]";
      default:
        return "text-[#ce9fc1]";
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4 items-center overflow-y-auto">
      {filteredEvents.map((event, index) => (
        <div
          key={index}
          className="bg-cardlight dark:bg-carddark shadow-lg w-[83%] p-4 rounded-md mb-4"
        >
          <h2 className={`text-xl font-semibold ${getTitleColor(event.type)}`}>
            {event.title}
          </h2>
          <small>
            {event.from} to {event.to}
          </small>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

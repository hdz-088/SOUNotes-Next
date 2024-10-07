import { useEffect, useState } from "react";

const events = [
  {
    title: "4th Review",
    from: "2024-09-05",
    to: "2024-09-12",
    type: "assignment",
    description:
      "4th and Final Review of Creative Assignment. Student must complete 100% work, PPT and Word document with Spiral",
  },
  {
    title: "Ganesh Chaturthy",
    from: "2024-09-07",
    to: "2024-09-07",
    type: "holiday",
    description: "",
  },
  {
    title: "Mid Semester Exams",
    from: "2024-09-23",
    to: "2024-10-01",
    type: "exams",
    description:
      'Sem 3,5,7 Mid Semester Exams. <a href="assets/mid-tt.pdf">Time-Table</a>',
  },
  {
    title: "Gandhi Jayanti",
    from: "2024-10-02",
    to: "2024-10-02",
    type: "holiday",
    description: "",
  },
  {
    title: "Mid Sem Result Declaration",
    from: "2024-10-05",
    to: "2024-10-05",
    type: "result",
    description: "Sem 3,5,7 Mid Semester Exam Result Declaration",
  },
  {
    title: "Ras Rasiya",
    from: "2024-10-08",
    to: "2024-10-09",
    type: "celebration",
    description: "Navratri Ras Rasiya Celebration",
  },
  {
    title: "Viva and Mid Remidial Exam",
    from: "2024-10-14",
    to: "2024-10-21",
    type: "exams",
    description:
      "Sem 3,5,7 Mid Semester Remidial Exam, Internal Submission and Viva",
  },
  {
    title: "Remidial 3rd Sem Mid Semester Result",
    from: "2024-10-24",
    to: "2024-10-24",
    type: "result",
    description: "Sem 3,5,7 Mid Semester Remidial Exam Result Declaration",
  },
  {
    title: "Term End",
    from: "2024-10-26",
    to: "2024-10-26",
    type: "term",
    description: "Sem 3,5,7 Term End",
  },
  {
    title: "Diwali Vacation",
    from: "2024-10-29",
    to: "2024-11-06",
    type: "holiday",
    description: "Diwali Vacation",
  },
  {
    title: "ESE Practical Exam",
    from: "2024-11-09",
    to: "2024-11-23",
    type: "exams",
    description: "End Semester Practical Exam",
  },
  {
    title: "ESE Remedial",
    from: "2024-11-09",
    to: "2024-11-23",
    type: "exams",
    description: "End Semester Sem 2,4,6,8 Remidial Exam",
  },
  {
    title: "ESE Regular Exam",
    from: "2024-11-26",
    to: "2024-12-20",
    type: "exams",
    description: "End Semester Regular/ Remidial Exam Sem 3,5,7",
  },
  {
    title: "ESE Remidial Result",
    from: "2024-12-16",
    to: "2024-12-16",
    type: "result",
    description: "End Semester Remidial Sem 2,4,6,8 Result Declaration",
  },
  {
    title: "ESE Regular Result",
    from: "2025-01-06",
    to: "2025-01-06",
    type: "result",
    description: "End Semester Exam Regular Sem 3,5,7 Result Declaration",
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

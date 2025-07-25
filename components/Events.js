import { useEffect, useState } from "react";

const events = [
  {
    title: "Silver Oak Foundation Day",
    from: "2025-07-26",
    to: "2025-07-26",
    type: "event",
    description: "Silver Oak Foundation Day",
  },
  {
    title: "Rakshabandhan",
    from: "2025-08-09",
    to: "2025-08-09",
    type: "holiday",
    description: "Rakshabandhan Holiday",
  },
  {
    title: "Independecne Day",
    from: "2025-08-15",
    to: "2025-08-15",
    type: "holiday",
    description: "Independence Day",
  },
  {
    title: "Janmasthami",
    from: "2025-08-16",
    to: "2025-08-16",
    type: "holiday",
    description: "Janmasthami",
  },
  {
    title: "Intermediate Exams",
    from: "2025-08-18",
    to: "2025-08-26",
    type: "exams",
    description: "Intermediate Exams",
  },
  {
    title: "Ganesh Chaturthi",
    from: "2025-08-27",
    to: "2025-08-27",
    type: "holiday",
    description: "Ganesh Chaturthi",
  },
  {
    title: "Result Declaration",
    from: "2025-08-30",
    to: "2025-08-30",
    type: "result",
    description: "Inermediate Exam Result Declaration",
  },
  {
    title: "Navratri Celebration",
    from: "2025-09-30",
    to: "2025-10-01",
    type: "event",
    description: "Navratri Celebration",
  },
  {
    title: "Gandhi Jayanti",
    from: "2025-10-02",
    to: "2025-10-02",
    type: "holiday",
    description: "Gandhi Jayanti",
  },
  {
    title: "Mid Sem Exam",
    from: "2025-10-03",
    to: "2025-10-11",
    type: "exams",
    description: "Mid Semester Exams",
  },
  {
    title: "Result Declaration",
    from: "2025-10-15",
    to: "2025-10-15",
    type: "result",
    description: "Mid-Semester Exam Results",
  },
  {
    title: "Diwali Vacation",
    from: "2025-10-18",
    to: "2025-10-26",
    type: "holiday",
    description: "Diwali Vacation",
  },
  {
    title: "Various Exams",
    from: "2025-10-30",
    to: "2025-11-08",
    type: "exams",
    description: "Mid-Sem Remedial | Internal Viva",
  },
  {
    title: "Term End",
    from: "2025-11-08",
    to: "2025-11-08",
    type: "term",
    description: "Term End",
  },
  {
    title: "End Semester Exams",
    from: "2025-11-13",
    to: "2025-11-13",
    type: "exams",
    description: "End Semester Exam",
  },
  {
    title: "Christmans",
    from: "2025-12-25",
    to: "2025-12-25",
    type: "holiday",
    description: "Christmas",
  },
  {
    title: "End Sem Result",
    from: "2026-01-02",
    to: "2026-01-002",
    type: "result",
    description: "End Sem Result",
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

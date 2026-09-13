import { useEffect, useState } from "react";

export const events = [
  {
    title: "Ganesh Chaturthi",
    from: "2026-09-15",
    to: "2026-09-15",
    type: "holiday",
    description: "Ganesh Chaturthi",
  },
  {
    title: "Gandhi Jayanti",
    from: "2026-10-02",
    to: "2026-10-02",
    type: "holiday",
    description: "Gandhi Jayanti",
  },
  {
    title: "Dussehra",
    from: "2026-10-20",
    to: "2026-10-20",
    type: "holiday",
    description: "Dussehra",
  },
  {
    title: "Diwali Vacation",
    from: "2026-11-06",
    to: "2026-11-14",
    type: "holiday",
    description: "Diwali Vacation",
  },
  {
    title: "Mid-Sem Exams",
    from: "2026-11-17",
    to: "2026-11-23",
    type: "exams",
    description: "Mid-Sem Exams",
  },
  {
    title: "Mid-Sem Exam Result",
    from: "2026-11-26",
    to: "2026-11-26",
    type: "result",
    description: "Mid-Sem Exam Result",
  },
  {
    title: "Mid-Sem Remedial Exam",
    from: "2026-11-30",
    to: "2026-12-05",
    type: "exams",
    description: "Mid-Sem Remedial Exam",
  },
  {
    title: "Internal Submission (Viva)",
    from: "2026-11-30",
    to: "2026-12-05",
    type: "exams",
    description: "Internal Submission (Viva)",
  },
  {
    title: "Mid-Sem Remedial Exam Result",
    from: "2026-12-08",
    to: "2026-12-08",
    type: "result",
    description: "Mid-Sem Remedial Exam Result",
  },
  {
    title: "Term End",
    from: "2026-12-05",
    to: "2026-12-05",
    type: "term",
    description: "Term End",
  },
  {
    title: "Christmas",
    from: "2026-12-25",
    to: "2026-12-25",
    type: "holiday",
    description: "Christmas",
  },
  {
    title: "End Semester Exams",
    from: "2026-12-17",
    to: "2026-12-31",
    type: "exams",
    description: "End Semester Theory Practical Exams",
  },
  {
    title: "Republic Day",
    from: "2027-01-26",
    to: "2027-01-26",
    type: "holiday",
    description: "Republic Day",
  },
  {
    title: "End SemesterExam Result Declaration",
    from: "2027-01-16",
    to: "2027-01-16",
    type: "result",
    description: "End Semester Regular/Remedial Exam Result Declaration",
  },
];

export default function EventList() {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const today = new Date();

    // Filter out events that have already passed
    const upcomingEvents = events.filter(
      (event) => new Date(event.to) >= today,
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
    <div className="flex flex-col gap-3 mt-4 w-full h-full overflow-y-auto pr-2">
      {filteredEvents.length === 0 ? (
        <div className="text-center text-muted-foreground p-4">
          No upcoming events
        </div>
      ) : (
        filteredEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 p-3 rounded-lg border bg-cardlight dark:bg-carddark text-card-foreground shadow-sm transition-colors hover:bg-accent/50"
          >
            <div className="flex justify-between items-start">
              <h3
                className={`font-semibold leading-none ${getTitleColor(event.type)}`}
              >
                {event.title}
              </h3>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                {event.type.toUpperCase()}
              </span>
            </div>

            <div className="text-sm text-foreground/80 mt-1">
              {event.description}
            </div>

            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {event.from === event.to ? (
                <span>{new Date(event.from).toLocaleDateString()}</span>
              ) : (
                <span>
                  {new Date(event.from).toLocaleDateString()} -{" "}
                  {new Date(event.to).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

import { useEffect, useState } from "react";

export const events = [
  {
    title: "Makar Sankranti",
    from: "2026-01-14",
    to: "2026-01-15",
    type: "holiday",
    description: "Makar Sankranti",
  },
  {
    title: "Republic Day",
    from: "2026-01-26",
    to: "2026-01-26",
    type: "holiday",
    description: "Republic Day",
  },
  {
    title: "Internal Exams",
    from: "2026-02-09",
    to: "2026-02-17",
    type: "exams",
    description: "Internal Exams",
  },
  {
    title: "Maha Shivratri",
    from: "2026-02-15",
    to: "2026-02-15",
    type: "holiday",
    description: "Maha Shivratri",
  },
  {
    title: "Internal Exam Result",
    from: "2026-02-23",
    to: "2026-02-23",
    type: "result",
    description: "Internal Exam Result",
  },
  {
    title: "Holi",
    from: "2026-03-04",
    to: "2026-03-04",
    type: "holiday",
    description: "Holi",
  },
  {
    title: "Ramzan Eid",
    from: "2026-03-21",
    to: "2026-03-21",
    type: "holiday",
    description: "Ramzan Eid",
  },
  {
    title: "Mid Semester Exam",
    from: "2026-03-23",
    to: "2026-03-30",
    type: "exams",
    description: "Mid Semester Exam",
  },
  {
    title: "Ram Navmi",
    from: "2026-03-26",
    to: "2026-03-26",
    type: "holiday",
    description: "Ram Navmi",
  },
  {
    title: "Mid Semester Exam Result",
    from: "2026-04-06",
    to: "2026-04-06",
    type: "result",
    description: "Mid Semester Exam Result",
  },
  {
    title: "Dr. Baba Ambedkar Jayanti",
    from: "2026-04-14",
    to: "2026-04-14",
    type: "holiday",
    description: "Dr. Baba Ambedkar Jayanti",
  },
  {
    title: "Mid Sem Remedial Exam",
    from: "2026-04-11",
    to: "2026-04-18",
    type: "exams",
    description: "Mid Sem Remedial Exam",
  },
  {
    title: "Internal Submission/Viva",
    from: "2026-04-11",
    to: "2026-04-18",
    type: "exams",
    description: "Internal Submission/Viva",
  },
  {
    title: "Mid Semester Remedial Exam Result Declaration",
    from: "2026-04-24",
    to: "2026-04-24",
    type: "result",
    description: "Mid Semester Remedial Exam Result Declaration",
  },
  {
    title: "Term End",
    from: "2026-04-18",
    to: "2026-04-18",
    type: "holiday",
    description: "Term End",
  },
  {
    title: "Final Semester Reg./Remedial",
    from: "2026-04-20",
    to: "2026-04-25",
    type: "exams",
    description: "Final Semester Reg./Remedial (Project Viva/ Practical Exam)",
  },
  {
    title: "End Semester Theory Exam (Sem-4/8)",
    from: "2026-04-27",
    to: "2026-05-16",
    type: "exams",
    description: "End Semester Regular/Remedial Theory Exam (Sem-4/8)",
  },
  {
    title: "Bakri Eid",
    from: "2026-05-27",
    to: "2026-05-27",
    type: "holiday",
    description: "Bakri Eid",
  },
  {
    title: "End Semester Practical Exam",
    from: "2026-05-18",
    to: "2026-05-28",
    type: "exams",
    description: "End Semester Reg./Remedial Practical Exam",
  },
  {
    title: "End Semester Remedial Theory Exam (Sem-1,3,5,7)",
    from: "2026-05-01",
    to: "2026-05-28",
    type: "exams",
    description: "End Semester Remedial Theory Exam (Sem-1,3,5,7)",
  },
  {
    title: "End SemesterExam Result Declaration",
    from: "2026-05-30",
    to: "2026-05-30",
    type: "result",
    description: "End Semester Regular/Remedial Exam Result Declaration Phase starts (Sem-4/6/8)",
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
    <div className="flex flex-col gap-3 mt-4 w-full h-full overflow-y-auto pr-2">
      {filteredEvents.length === 0 ? (
        <div className="text-center text-muted-foreground p-4">No upcoming events</div>
      ) : (
        filteredEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 p-3 rounded-lg border bg-cardlight dark:bg-carddark text-card-foreground shadow-sm transition-colors hover:bg-accent/50"
          >
            <div className="flex justify-between items-start">
              <h3 className={`font-semibold leading-none ${getTitleColor(event.type)}`}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              {event.from === event.to ? (
                <span>{new Date(event.from).toLocaleDateString()}</span>
              ) : (
                <span>{new Date(event.from).toLocaleDateString()} - {new Date(event.to).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

import React, { useState } from "react";
import Modal from "./components/EventModal";

interface Event {
  title: string;
  time: string;
  capacity: number;
  spotsTaken: number;
}

interface CalendarEvent {
  date: string;
  events: Event[];
}
const eventsData: CalendarEvent[] = [
  {
    date: "2021-12-27",
    events: [
      { title: "Open Practice", time: "9AM", capacity: 20, spotsTaken: 15 },
    ],
  },
  { date: "2021-12-28", events: [] },
  { date: "2021-12-29", events: [] },
  { date: "2021-12-30", events: [] },
  { date: "2021-12-31", events: [] },
  {
    date: "2022-01-01",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 25, spotsTaken: 10 },
    ],
  },
  { date: "2022-01-02", events: [] },
  {
    date: "2022-01-03",
    events: [
      { title: "Open Practice", time: "9PM", capacity: 30, spotsTaken: 5 },
    ],
  },
  {
    date: "2022-01-04",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 20, spotsTaken: 20 },
    ],
  },
  { date: "2022-01-05", events: [] },
  { date: "2022-01-06", events: [] },
  { date: "2022-01-07", events: [] },
  { date: "2022-01-08", events: [] },
  { date: "2022-01-09", events: [] },
  {
    date: "2022-01-10",
    events: [
      { title: "OTHG Race!", time: "9PM", capacity: 15, spotsTaken: 12 },
    ],
  },
  { date: "2022-01-11", events: [] },
  {
    date: "2022-01-12",
    events: [
      { title: "Open Practice!", time: "2PM", capacity: 20, spotsTaken: 10 },
    ],
  },
  { date: "2022-01-13", events: [] },
  { date: "2022-01-14", events: [] },
  { date: "2022-01-15", events: [] },
  { date: "2022-01-16", events: [] },
  {
    date: "2022-01-17",
    events: [
      { title: "Open Practice", time: "9PM", capacity: 30, spotsTaken: 5 },
    ],
  },
  {
    date: "2022-01-18",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 25, spotsTaken: 23 },
    ],
  },
  { date: "2022-01-19", events: [] },
  { date: "2022-01-20", events: [] },
  {
    date: "2022-01-21",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 20, spotsTaken: 18 },
    ],
  },
  { date: "2022-01-22", events: [] },
  { date: "2022-01-23", events: [] },
  {
    date: "2022-01-24",
    events: [
      { title: "Open Practice", time: "9PM", capacity: 30, spotsTaken: 20 },
    ],
  },
  { date: "2022-01-25", events: [] },
  { date: "2022-01-26", events: [] },
  {
    date: "2022-01-27",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 25, spotsTaken: 25 },
    ],
  },
  { date: "2022-01-28", events: [] },
  { date: "2022-01-29", events: [] },
  { date: "2022-01-30", events: [] },
  { date: "2022-01-31", events: [] },
  {
    date: "2022-02-01",
    events: [
      { title: "Open Practice!", time: "4PM", capacity: 20, spotsTaken: 5 },
    ],
  },
  { date: "2022-02-02", events: [] },
  { date: "2022-02-03", events: [] },
  { date: "2022-02-04", events: [] },
  { date: "2022-02-05", events: [] },
  { date: "2022-02-06", events: [] },
];

const Calendar: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 pr-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time dateTime="2022-01">January 2022</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Month view
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative ml-6 md:hidden">
            <button
              type="button"
              className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
              id="menu-0-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </button>

            <div
              className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-0-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-0"
                >
                  Create event
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-1"
                >
                  Go to today
                </a>
              </div>
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-2"
                >
                  Day view
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-3"
                >
                  Week view
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-4"
                >
                  Month view
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-0-item-5"
                >
                  Year view
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span>M</span>
            <span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>W</span>
            <span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>F</span>
            <span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {eventsData.map(({ date, events }) => (
              <div
                className={`relative ${new Date(date) < new Date("2022-01-01") ? "bg-gray-50" : "bg-white"} px-3 py-2 text-gray-500`}
                key={date}
              >
                <time dateTime={date}>{new Date(date).getDate()}</time>
                {events.length > 0 && (
                  <ol className="mt-2">
                    {events.map((event, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleEventClick(event)}
                          className="group flex"
                        >
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.title}
                          </p>
                          <time
                            dateTime={`${date}T${event.time.replace(/[^0-9]/g, "")}:00`}
                            className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                          >
                            {event.time}
                          </time>
                        </button>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
          {selectedEvent && (
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              eventTitle={selectedEvent.title}
              eventTime={selectedEvent.time}
              capacity={selectedEvent.capacity}
              spotsTaken={selectedEvent.spotsTaken}
            />
          )}
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            {eventsData.map(({ date, events }) => (
              <button
                type="button"
                className={`flex h-14 flex-col ${new Date(date) < new Date("2022-01-01") ? "bg-gray-50" : "bg-white"} px-3 py-2 text-gray-${new Date(date) < new Date("2022-01-01") ? "500" : "900"} hover:bg-gray-100 focus:z-10`}
                key={date}
              >
                <time dateTime={date} className="ml-auto">
                  {new Date(date).getDate()}
                </time>
                <span className="sr-only">{events.length} events</span>
                {events.length > 0 && (
                  <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                    {events.map((event, index) => (
                      <span
                        key={index}
                        className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                      ></span>
                    ))}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

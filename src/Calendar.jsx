import React from 'react';

const Calendar = () => {
  const schedule = [
    {
      date: "Nov 30",
      day: "Saturday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Macroeconomics", type: "study" },
        { time: "7:00-9:00 PM", subject: "Macroeconomics", type: "study" }
      ]
    },
    {
      date: "Dec 1",
      day: "Sunday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Macroeconomics", type: "study" },
        { time: "7:00-9:00 PM", subject: "Economics of Healthcare", type: "study" }
      ]
    },
    {
      date: "Dec 2",
      day: "Monday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Macroeconomics", type: "study" },
        { time: "7:00-9:00 PM", subject: "Water", type: "study" }
      ]
    },
    {
      date: "Dec 3",
      day: "Tuesday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Economics of Healthcare", type: "study" },
        { time: "7:00-9:00 PM", subject: "Macroeconomics", type: "study" }
      ]
    },
    {
      date: "Dec 4",
      day: "Wednesday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Water", type: "study" },
        { time: "7:00-9:00 PM", subject: "Macroeconomics", type: "study" }
      ]
    },
    {
      date: "Dec 5",
      day: "Thursday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Economics of Healthcare (Final Review)", type: "study" },
        { time: "7:00-9:00 PM", subject: "Macroeconomics", type: "study" }
      ]
    },
    {
      date: "Dec 6",
      day: "Friday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Economics of Healthcare (Final Review)", type: "study" },
        { time: "2:00-4:00 PM", subject: "Economics of Healthcare", type: "exam" },
        { time: "7:00-8:00 PM", subject: "Macroeconomics (Light Study)", type: "study" }
      ]
    },
    {
      date: "Dec 7",
      day: "Saturday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Water (Final Review)", type: "study" },
        { time: "7:00-9:00 PM", subject: "Water", type: "exam" }
      ]
    },
    {
      date: "Dec 8",
      day: "Sunday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Macroeconomics (Final Review)", type: "study" },
        { time: "4:00-6:00 PM", subject: "Macroeconomics (Final Review)", type: "study" }
      ]
    },
    {
      date: "Dec 9",
      day: "Monday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Macroeconomics (Final Review)", type: "study" },
        { time: "2:00-4:00 PM", subject: "Macroeconomics", type: "exam" }
      ]
    },
    {
      date: "Dec 10",
      day: "Tuesday",
      blocks: [
        { time: "4:00-5:00 PM", subject: "Statistics (Light Study)", type: "study" }
      ]
    },
    {
      date: "Dec 11",
      day: "Wednesday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics", type: "study" }
      ]
    },
    {
      date: "Dec 12",
      day: "Thursday",
      blocks: [
        { time: "ALL DAY", subject: "REST DAY", type: "rest" }
      ]
    },
    {
      date: "Dec 13",
      day: "Friday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics", type: "study" }
      ]
    },
    {
      date: "Dec 14",
      day: "Saturday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics", type: "study" }
      ]
    },
    {
      date: "Dec 15",
      day: "Sunday",
      blocks: [
        { time: "ALL DAY", subject: "REST DAY", type: "rest" }
      ]
    },
    {
      date: "Dec 16",
      day: "Monday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics", type: "study" }
      ]
    },
    {
      date: "Dec 17",
      day: "Tuesday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics", type: "study" }
      ]
    },
    {
      date: "Dec 18",
      day: "Wednesday",
      blocks: [
        { time: "4:00-6:00 PM", subject: "Statistics (Final Review)", type: "study" }
      ]
    },
    {
      date: "Dec 19",
      day: "Thursday",
      blocks: [
        { time: "11:00 AM-1:00 PM", subject: "Statistics (Final Review)", type: "study" },
        { time: "7:00-10:00 PM", subject: "Statistics", type: "exam" }
      ]
    },
    {
      date: "Dec 22",
      day: "Sunday",
      blocks: [
        { time: "Flight", subject: "Tootsie coming back to Lebanon ❤️", type: "special" }
      ]
    }
  ];

  const getBlockColor = (type) => {
    switch (type) {
      case 'study':
        return 'bg-blue-100';
      case 'exam':
        return 'bg-red-100';
      case 'rest':
        return 'bg-green-100';
      case 'special':
        return 'bg-pink-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getSubjectColor = (subject) => {
    if (subject.includes('Macroeconomics')) return 'border-l-4 border-purple-400';
    if (subject.includes('Statistics')) return 'border-l-4 border-yellow-400';
    if (subject.includes('Economics of Healthcare')) return 'border-l-4 border-blue-400';
    if (subject.includes('Water')) return 'border-l-4 border-green-400';
    if (subject.includes('Tootsie')) return 'border-l-4 border-pink-400';
    return '';
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Study Schedule (Nov 30 - Dec 22)</h1>
      </div>
      <div className="space-y-4">
        {schedule.map((day, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="font-bold mb-2">{day.date} ({day.day})</div>
            <div className="space-y-2">
              {day.blocks.map((block, blockIndex) => (
                <div 
                  key={blockIndex} 
                  className={`p-3 rounded-md ${getBlockColor(block.type)} ${getSubjectColor(block.subject)}`}
                >
                  <div className="font-medium">{block.time}</div>
                  <div>{block.subject}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 rounded"></div>
          <span>Study Session</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 rounded"></div>
          <span>Exam</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-100 rounded"></div>
          <span>Rest Day</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-pink-100 rounded"></div>
          <span>Special Event</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
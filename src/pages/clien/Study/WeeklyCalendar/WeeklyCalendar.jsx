import React, { useState } from "react";

const WeeklyCalendar = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const getMonday = (date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Điều chỉnh cho ngày chủ nhật và các ngày khác
    return new Date(date.setDate(diff));
  };

  // Set tuần hiện tại (khởi tạo)
  const [currentWeekStart, setCurrentWeekStart] = useState(
    getMonday(new Date())
  );

  // Hàm cập nhật ngày hiện tại
  const goToToday = () => {
    setCurrentWeekStart(getMonday(new Date()));
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setCurrentWeekStart(getMonday(selectedDate)); // Cập nhật ngày bắt đầu tuần là Monday
  };

  const getTodayDateForInput = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const fakeData = {
    "16/09/2024": {
      morning: [
        {
          subject: "Lập trình web với Java",
          code: "DHTI15A4HN",
          classCode: "010100202706",
          period: "3 - 6",
          room: "Phòng học/H.A9-407",
          teacher: "GV: Lương Thị Thảo Hiếu",
        },
      ],
      afternoon: [],
      evening: [
        {
          subject: "Thực tập an toàn thông tin",
          code: "DHTI15A4HN",
          classCode: "010100018106",
          period: "14 - 16",
          room: "https://meet.google.com/sxm-dbxg-hhb",
          teacher: "",
        },
      ],
    },
    "17/09/2024": {
      morning: [],
      afternoon: [
        {
          subject: "Quản trị mạng",
          code: "DHTI15A4HN",
          classCode: "010100123456",
          period: "7 - 9",
          room: "Phòng học/H.A9-408",
          teacher: "GV: Nguyễn Văn A",
        },
      ],
      evening: [],
    },
    "18/09/2024": {
      morning: [
        {
          subject: "Cơ sở dữ liệu",
          code: "DHTI15A4HN",
          classCode: "010100654321",
          period: "1 - 3",
          room: "Phòng học/H.A9-409",
          teacher: "GV: Trần Thị B",
        },
      ],
      afternoon: [],
      evening: [],
    },
    "19/09/2024": {
      morning: [],
      afternoon: [],
      evening: [
        {
          subject: "Phát triển ứng dụng di động",
          code: "DHTI15A4HN",
          classCode: "010100111111",
          period: "14 - 16",
          room: "Phòng học/H.A9-410",
          teacher: "GV: Lê Văn C",
        },
      ],
    },
    "20/09/2024": {
      morning: [
        {
          subject: "Thực hành mạng",
          code: "DHTI15A4HN",
          classCode: "010100121212",
          period: "1 - 6",
          room: "Phòng hiệu năng cao 02/H.A9-507",
          teacher: "GV: Điền Thị Hồng Hà",
        },
      ],
      afternoon: [],
      evening: [],
    },
    "21/09/2024": {
      morning: [],
      afternoon: [
        {
          subject: "Lập trình C++",
          code: "DHTI15A4HN",
          classCode: "010100333333",
          period: "7 - 9",
          room: "Phòng học/H.A9-411",
          teacher: "GV: Phạm Văn D",
        },
      ],
      evening: [],
    },
    "22/09/2024": {
      morning: [],
      afternoon: [],
      evening: [
        {
          subject: "Thực hành cơ sở dữ liệu",
          code: "DHTI15A4HN",
          classCode: "010100444444",
          period: "14 - 16",
          room: "https://meet.google.com/abc-defg-hij",
          teacher: "",
        },
      ],
    },
    "23/09/2024": {
      morning: [
        {
          subject: "Thực hành web",
          code: "DHTI15A4HN",
          classCode: "010100136806",
          period: "1 - 6",
          room: "Phòng hiệu năng cao 02/H.A9-507",
          teacher: "GV: Điền Thị Hồng Hà",
        },
      ],
      afternoon: [],
      evening: [],
    },
    "24/09/2024": {
      morning: [
        {
          subject: "Thực hành web",
          code: "DHTI15A4HN",
          classCode: "010100136806",
          period: "1 - 6",
          room: "Phòng hiệu năng cao 02/H.A9-507",
          teacher: "GV: Điền Thị Hồng Hà",
        },
      ],
      afternoon: [
        {
          subject: "Thực hành web",
          code: "DHTI15A4HN",
          classCode: "010100136806",
          period: "7 - 9",
          room: "Phòng hiệu năng cao 02/H.A9-507",
          teacher: "GV: Điền Thị Hồng Hà",
        },
      ],
      evening: [],
    },
    "27/09/2024": {
      morning: [
        {
          subject: "Thực tập an toàn thông tin",
          code: "DHTI15A4HN",
          classCode: "010100018106",
          period: "1 - 3",
          room: "Phòng máy tính 01/H.A9-603",
          teacher: "GV: Phạm Minh Thái",
        },
        {
          subject: "Tư tưởng Hồ Chí Minh",
          code: "DHTI15A18HN",
          classCode: "010100057352",
          period: "4 - 6",
          room: " Phòng học/H.A9-403",
          teacher: "GV: Ngô Thị Mai",
        },
      ],
      afternoon: [],
      evening: [
        {
          subject: "Thực hành lập trình .NET",
          code: "DHTI15A4HN",
          classCode: "010100018406",
          period: "14 - 16",
          room: " https://meet.google.com/aws-ytvt-qts",
          teacher: "GV: Vũ Anh Tuấn",
        },
      ],
    },
    "30/09/2024": {
      morning: [
        {
          subject: "Lập trình web với Java",
          code: "DHTI15A4HN",
          classCode: "010100202706",
          period: "3 - 6",
          room: "Phòng học/H.A9-407",
          teacher: "GV: Lương Thị Thảo Hiếu",
        },
      ],
      afternoon: [],
      evening: [
        {
          subject: "Thực tập an toàn thông tin",
          code: "DHTI15A4HN",
          classCode: "010100018106",
          period: "14 - 16",
          room: "https://meet.google.com/sxm-dbxg-hhb",
          teacher: "",
        },
      ],
    },
    "01/10/2024": {
      morning: [],
      afternoon: [
        {
          subject: "Quản trị mạng",
          code: "DHTI15A4HN",
          classCode: "010100123456",
          period: "7 - 9",
          room: "Phòng học/H.A9-408",
          teacher: "GV: Nguyễn Văn A",
        },
      ],
      evening: [],
    },
    "02/10/2024": {
      morning: [
        {
          subject: "Cơ sở dữ liệu",
          code: "DHTI15A4HN",
          classCode: "010100654321",
          period: "1 - 3",
          room: "Phòng học/H.A9-409",
          teacher: "GV: Trần Thị B",
        },
      ],
      afternoon: [],
      evening: [],
    },
    "03/10/2024": {
      morning: [],
      afternoon: [],
      evening: [
        {
          subject: "Phát triển ứng dụng di động",
          code: "DHTI15A4HN",
          classCode: "010100111111",
          period: "14 - 16",
          room: "Phòng học/H.A9-410",
          teacher: "GV: Lê Văn C",
        },
      ],
    },
    "05/10/2024": {
      morning: [
        {
          subject: "Thực hành mạng",
          code: "DHTI15A4HN",
          classCode: "010100121212",
          period: "1 - 6",
          room: "Phòng hiệu năng cao 02/H.A9-507",
          teacher: "GV: Điền Thị Hồng Hà",
        },
      ],
      afternoon: [],
      evening: [],
    },
  };

  const getFormattedDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getWeekDays = (startDate) => {
    const monday = getMonday(startDate);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const current = new Date(monday);
      current.setDate(monday.getDate() + i);
      days.push(current);
    }
    return days;
  };

  const handleNextClick = () => {
    const nextWeek = new Date(currentWeekStart);
    nextWeek.setDate(currentWeekStart.getDate() + 7); // Di chuyển đến thứ 2 của tuần sau
    setCurrentWeekStart(nextWeek);
  };

  const handleBackClick = () => {
    const prevWeek = new Date(currentWeekStart);
    prevWeek.setDate(currentWeekStart.getDate() - 7); // Di chuyển đến thứ 2 của tuần trước
    setCurrentWeekStart(prevWeek);
  };

  const renderSchedule = (weekDates) => {
    return ["morning", "afternoon", "evening"].map((shift) => (
      <tr key={shift}>
        <td className="border border-gray-300 bg-yellow-100 px-4 py-10">
          {shift === "morning"
            ? "Sáng"
            : shift === "afternoon"
            ? "Chiều"
            : "Tối"}
        </td>
        {weekDates.map((date, dayIndex) => {
          const dayKey = getFormattedDate(date);
          const classes = fakeData[dayKey]?.[shift] || [];
          return (
            <td key={dayIndex} className="border border-gray-300 px-4 py-10">
              {classes.length > 0 ? (
                classes.map((cls, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 text-cyan-600 p-2 mb-2 border border-gray-200 border-solid  rounded shadow cursor-pointer"
                  >
                    <strong>{cls.subject}</strong> <br />
                    {cls.code} - {cls.classCode} <br />
                    Tiết: {cls.period} <br />
                    Phòng: {cls.room} <br />
                    {cls.teacher && <span>GV: {cls.teacher}</span>}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 italic"></div>
              )}
            </td>
          );
        })}
      </tr>
    ));
  };

  const schedule = getWeekDays(currentWeekStart); // Lấy tất cả các ngày trong tuần

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div>
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Lịch học, lịch thi theo tuần
                </h2>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>

                {/* Filters */}
                <div className="pl-3 mt-4 mx-2">
                  <div className="flex items-center justify-end space-x-4">
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="tatca"
                        name="filter"
                        className="mr-2 accent-gray-500"
                      />
                      <label
                        className="text-gray-400 font-semibold text-sm"
                        htmlFor="tatca"
                      >
                        Tất cả
                      </label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="lichhoc"
                        name="filter"
                        className="mr-2 accent-gray-500"
                      />
                      <label
                        className="text-gray-400 font-semibold text-sm"
                        htmlFor="lichhoc"
                      >
                        Lịch học
                      </label>
                    </div>
                    <div className="flex items-center mb-2">
                      <input
                        type="radio"
                        id="lichthi"
                        name="filter"
                        className="mr-2 accent-gray-500"
                      />
                      <label
                        className="text-gray-400 font-semibold text-sm"
                        htmlFor="lichthi"
                      >
                        Lịch thi
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="date"
                        value={currentWeekStart.toISOString().slice(0, 10)} // Format date to yyyy-MM-dd
                        onChange={handleDateChange}
                        className="ml-2 border rounded"
                      />
                    </div>

                    <div
                      onClick={goToToday}
                      className="flex items-center bg-cyan-500 px-4 py-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                        />
                      </svg>
                      <button className=" text-white font-semibold text-sm ">
                        Hiện tại
                      </button>
                    </div>
                    <div className="flex items-center bg-cyan-500 px-4 py-2 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                        />
                      </svg>
                      <button className=" text-white font-semibold text-sm ">
                        In lịch
                      </button>
                    </div>
                    <div
                      onClick={handleBackClick}
                      className="flex items-center bg-cyan-500 px-4 py-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                      <button className=" text-white font-semibold text-sm ">
                        Trở về
                      </button>
                    </div>
                    <div
                      onClick={handleNextClick}
                      className="flex items-center bg-cyan-500 px-4 py-2 rounded"
                    >
                      <button className=" text-white font-semibold text-sm ">
                        Tiếp
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-white mr-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 mx-2 overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 bg-cyan-500 text-white px-4 py-2">
                          Ca học
                        </th>
                        {getWeekDays(currentWeekStart).map((day, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 bg-cyan-500 text-white px-4 py-2"
                          >
                            {
                              [
                                "Thứ 2",
                                "Thứ 3",
                                "Thứ 4",
                                "Thứ 5",
                                "Thứ 6",
                                "Thứ 7",
                                "Chủ nhật",
                              ][index]
                            }{" "}
                            <br />
                            {getFormattedDate(day)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>{renderSchedule(schedule)}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeeklyCalendar;

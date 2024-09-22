import React , {useState} from "react";

const WeekProgress = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const tableData = [
    {
      stt: 1,
      courseCode: "0101002129",
      courseName: "Kỹ năng phỏng vấn xin việc",
      credits: 1,
      day: 1,
      period: "7 - 12",
      type: "Lý thuyết",
      room: "Meet_Online",
      group: "",
      time: "",
      startDate: "21/09/2024",
      endDate: "21/09/2024",
      teacherCode: "TG00000196",
      teacherName: "THS. Phan Đức Thiện",
    },
    {
      stt: 2,
      courseCode: "0101002029",
      courseName: "Lập trình ứng dụng doanh nghiệp trong .NET",
      credits: 3,
      day: 3,
      period: "7 - 10",
      type: "Lý thuyết",
      room: "Phòng học/H.A9-304",
      group: "",
      time: "",
      startDate: "26/09/2024",
      endDate: "21/11/2024",
      teacherCode: "TG00000196",
      teacherName: "THS. Phan Đức Thiện",
    },
    {
      stt: 3,
      courseCode: "0101002027",
      courseName: "Lập trình web với Java",
      credits: 3,
      day: 3,
      period: "3 - 6",
      type: "Lý thuyết",
      room: "Phòng học/H.A9-407",
      group: "",
      time: "",
      startDate: "24/09/2024",
      endDate: "26/11/2024",
      teacherCode: "01027017",
      teacherName: "THS. Lương Thị Thảo Hiếu",
    },
    {
      stt: 4,
      courseCode: "0101002027",
      courseName: "Tư tưởng Hồ Chí Minh",
      credits: 2,
      day: 6,
      period: "4 - 6",
      type: "Lý thuyết",
      room: "Phòng học/H.A9-403",
      group: "",
      time: "",
      startDate: "27/09/2024	",
      endDate: "22/11/2024",
      teacherCode: "01011010",
      teacherName: "THS. Đào Thanh Bình",
    },
    {
      stt: 5,
      courseCode: "0101000184",
      courseName: "Thực hành lập trình .NET",
      credits: 3,
      day: 7,
      period: "1 - 6",
      type: "Thực hành",
      room: "Phòng Lab Cisco/H.A9-508",
      group: "",
      time: "",
      startDate: "28/09/2024	",
      endDate: "23/11/2024",
      teacherCode: "01027035",
      teacherName: "THS. Vũ Anh Tuấn",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
            <h2 className="text-blue-500 font-bold text-xl pl-4 pt-4">
              Lịch học, lịch thi theo tiến độ
            </h2>
            <table className="min-w-full mt-4 border-collapse border">
              <thead>
                <tr className="bg-cyan-500 text-white text-center">
                  <th className="py-2 px-4 border">STT</th>
                  <th className="py-2 px-4 border">Mã học phần</th>
                  <th className="py-2 px-4 border">Tên môn học/học phần</th>
                  <th className="py-2 px-4 border">Số tín chỉ</th>
                  <th className="py-2 px-4 border">Thứ</th>
                  <th className="py-2 px-4 border">Tiết</th>
                  <th className="py-2 px-4 border">Loại lịch</th>
                  <th className="py-2 px-4 border">Phòng</th>
                  <th className="py-2 px-4 border">Nhóm</th>
                  <th className="py-2 px-4 border">Giờ</th>
                  <th className="py-2 px-4 border">Bắt đầu</th>
                  <th className="py-2 px-4 border">Kết thúc</th>
                  <th className="py-2 px-4 border">Mã giảng viên</th>
                  <th className="py-2 px-4 border">Giảng viên</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="text-center text-gray-400 text-sm">
                    <td className="py-2 px-4 border">{row.stt}</td>
                    <td className="py-2 px-4 border">{row.courseCode}</td>
                    <td className="py-2 px-4 border">{row.courseName}</td>
                    <td className="py-2 px-4 border">{row.credits}</td>
                    <td className="py-2 px-4 border">{row.day}</td>
                    <td className="py-2 px-4 border">{row.period}</td>
                    <td className="py-2 px-4 border">{row.type}</td>
                    <td className="py-2 px-4 border">{row.room}</td>
                    <td className="py-2 px-4 border">{row.group}</td>
                    <td className="py-2 px-4 border">{row.time}</td>
                    <td className="py-2 px-4 border">{row.startDate}</td>
                    <td className="py-2 px-4 border">{row.endDate}</td>
                    <td className="py-2 px-4 border">{row.teacherCode}</td>
                    <td className="py-2 px-4 border">{row.teacherName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default WeekProgress;

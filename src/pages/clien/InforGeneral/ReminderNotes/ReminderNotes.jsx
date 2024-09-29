import React from "react";
import { useState } from "react";

const ReminderNotes = () => {
  const [isDetail, setIsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const handleDetail = (id) => {
    if (isDetail === id) {
      setIsDetail(null);
    } else {
      setIsDetail(id);
    }
  };

  const ApiInforStudent = [
    {
      id: 1,
      title: "PMT-EMS Lịch học thay đổi",
      Day: "19-07-2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp ● Thông báo lịch học thay đổi ● Công nghệ lập trình đa nền tảng cho ứng dụng di động ● Ngày 19/07/2024, Tiết 4-6 → 4-6, Phòng H.A9-302 → H.A8-501",
    },
    {
      id: 2,
      title: "PMT-EMS Thông báo đã nộp học phí/ lệ phí thành công ",
      Day: "14/07/2024 - 14/07/2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp Thông báo: Bạn đã nộp thành công số tiền 5160000 ngày 14/07/2024 09:53:32",
    },
    {
      id: 3,
      title: "PMT-EMS Lịch học thay đổi",
      Day: "09-07-2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp ● Thông báo lịch học thay đổi ● Công nghệ lập trình đa nền tảng cho ứng dụng di động ● Ngày 09/07/2024, Tiết 4-6 → 4-6, Phòng H.A9-302 → H.A8-508",
    },
    {
      id: 4,
      title: "PMT-EMS Lịch học thay đổi",
      Day: "09-07-2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp ● Thông báo lịch học thay đổi ● Công nghệ lập trình đa nền tảng cho ứng dụng di động ● Ngày 09/07/2024, Tiết 4-6 → 4-6, Phòng H.A9-302 → H.A8-508",
    },
    {
      id: 5,
      title: "PMT-EMS Lịch học thay đổi",
      Day: "09-07-2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp ● Thông báo lịch học thay đổi ● Công nghệ lập trình đa nền tảng cho ứng dụng di động ● Ngày 09/07/2024, Tiết 4-6 → 4-6, Phòng H.A9-302 → H.A8-508",
    },
    {
      id: 6,
      title: "PMT-EMS Lịch học thay đổi",
      Day: "09-07-2024",
      desc: "Trường Đại học Kinh tế Kỹ thuật Công nghiệp ● Thông báo lịch học thay đổi ● Công nghệ lập trình đa nền tảng cho ứng dụng di động ● Ngày 09/07/2024, Tiết 4-6 → 4-6, Phòng H.A9-302 → H.A8-508",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="  w-screen  overflow-y-auto shadow-lg h-full bg-gray-200">
          <div className=" lg:mx-14 xs:mx-0  my-4">
            <div className="bg-white rounded">
              <div className=" lg:flex items-center xs:block justify-between">
                <div className="lg:col-span-1  my-4">
                  <h2 className=" text-blue-400  font-bold text-xl pl-3 pt-2">
                    Ghi chú nhắc nhở
                  </h2>
                </div>
                <div className="lg:col-span-1 my-4">
                  <div className="flex items-center">
                    <p className=" text-gray-400 text-sm font-semibold mr-4 ">
                      {" "}
                      Lọc bản tin
                    </p>
                    <select
                      className="border border-solid border-gray-200 rounded px-12 py-2 mr-4"
                      name="point"
                      id="points"
                    >
                      <option value="Tất cả">Tất cả</option>
                      <option value="Mới">Mới</option>
                      <option value="Chưa xem">Chưa xem</option>
                      <option value="Hết hạn">Hết hạn</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className=" border-t border-gray-200 border-solid mt-2"></div>
              {ApiInforStudent.map((infor) => (
                <div
                  key={infor.id}
                  className=" mx-4 mt-4 mb-4 border border-solid  border-gray-300 rounded"
                >
                  <div className=" cursor-pointer flex ml-2 pt-2 ">
                    <h2
                      onClick={() => handleDetail(infor.id)}
                      className="text-blue-500  font-bold lg:text-xl xs:text-lg hover:text-blue-300  "
                    >
                      {infor.title}
                    </h2>
                    <p className=" ml-2 font-bold text-red-500 text-sm">
                      {" "}
                      - {infor.Day}
                    </p>
                  </div>
                  <p
                    onClick={() => handleDetail(infor.id)}
                    className={` font-semibold text-right text-red-500 text-sm  mr-3 pb-2 cursor-pointer hover:text-blue-300 ${
                      isDetail === infor.id ? " hidden" : " block"
                    } `}
                  >
                    Xem chi tiết
                  </p>
                  <p
                    className={` ${
                      isDetail === infor.id ? "block" : " hidden"
                    } ml-2 pb-2 text-gray-400 font-normal text-xs  `}
                  >
                    {infor.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ReminderNotes;

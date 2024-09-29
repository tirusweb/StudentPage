import React, { useState } from "react";

const ScoreInformation = () => {
  const [isShow, setIsShow] = useState(null);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const handleToggle = (id) => {
    if (isShow === id) {
      setIsShow(null);
    } else {
      setIsShow(id);
    }
  };

  const FakeApi = [
    {
      id: 1,
      semester: "1 (2021 - 2022)",
      data: [
        {
          stt: 1,
          code: "010100058405",
          name: "Logic học",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100096905",
          name: "Tin học văn phòng",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100019705",
          name: "Tin cơ sở",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100071824",
          name: "Giáo dục thể chất 1",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100105330",
          name: "Đại số tuyến tính",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100189005",
          name: "Xử lý tín hiệu số",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100110215",
          name: "Xác suất thống kê",
          tc: 3,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 2,
      semester: "2 (2021 - 2022)",
      data: [
        {
          stt: 1,
          code: "010100194258",
          name: "Tiếng Anh 1",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100112901",
          name: "Thực tập lập trình cơ bản",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100153543",
          name: "	Triết học Mac - Lênin",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100058523",
          name: "Pháp luật đại cương",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100110325",
          name: "	Toán giải tích",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100059129",
          name: "	Vật lý",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100185621",
          name: "	Phương pháp tính",
          tc: 2,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 3,
      semester: "1 (2022 - 2023)",
      data: [
        {
          stt: 1,
          code: "0101002151120",
          name: "	Kỹ năng nhận thức bản thân",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100071942",
          name: "Giáo dục thể chất 2",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100121524",
          name: "Kiến trúc máy tính",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100107827",
          name: "Lập trình hướng đối tượng",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100194316",
          name: "Tiếng Anh 2",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100220081",
          name: "Giáo dục quốc phòng - HP1",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "0101002201106",
          name: "Giáo dục quốc phòng - HP2",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 8,
          code: "0101002201106",
          name: "Giáo dục quốc phòng - HP3",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 9,
          code: "0101002202122",
          name: "Giáo dục quốc phòng - HP4",
          tc: 2,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 4,
      semester: "2 (2022 - 2023)",
      data: [
        {
          stt: 1,
          code: "010100073946",
          name: "Giáo dục thể chất 3",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100015720",
          name: "Cơ sở dữ liệu",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100115620",
          name: "Kỹ thuật đồ họa máy tính",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100127622",
          name: "Thực hành lập trình hướng đối tượng",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100153623",
          name: "Kinh tế chính trị Mac - Lê Nin",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100140806",
          name: "Cấu trúc dữ liệu và giải thuật1",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100019904",
          name: "Toán rời rạc",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 8,
          code: "0101002202122",
          name: "Tiếng Anh 3",
          tc: 4,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 5,
      semester: "1 (2023 - 2024)",
      data: [
        {
          stt: 1,
          code: "010100093618",
          name: "Phân tích và thiết kế các hệ thống thông tin",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100127403",
          name: "Hệ điều hành",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100127503",
          name: "Kỹ thuật điện tử số",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100018003",
          name: "	Quản lý dự án công nghệ thông tin",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100153623",
          name: "Tiếng Anh 4",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100140806",
          name: "	Mạng máy tính",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100019904",
          name: "Đồ án 1",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 8,
          code: "0101002202122",
          name: "Ứng dụng dữ liệu WEB",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 9,
          code: "010100020105",
          name: "Chủ nghĩa xã hội khoa học",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 10,
          code: "010100153735",
          name: "Kỹ năng nghề nghiệp - CNTT",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 11,
          code: "010100074042",
          name: "Giáo dục thể chất 4",
          tc: 1,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 6,
      semester: "2 (2023 - 2024)",
      data: [
        {
          stt: 1,
          code: "010100129215",
          name: "	Trí tuệ nhân tạo",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100107711",
          name: "Thực hành quản trị mạng",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100107513",
          name: "Thực hành lập trình mạng",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100132618",
          name: "An toàn thông tin",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100185318",
          name: "Công nghệ lập trình đa nền tảng cho ứng dụng di động",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100185429",
          name: "Đồ án 2",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100015918",
          name: "Công nghệ Java",
          tc: 3,
          number: 0,
          permission: 0,
        },
        {
          stt: 8,
          code: "010100017018",
          name: "Lập trình .NET",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 9,
          code: "010100016014",
          name: "	Công nghệ phần mềm",
          tc: 2,
          number: 0,
          permission: 0,
        },
      ],
    },
    {
      id: 7,
      semester: "1 (2021 - 2022)",
      data: [
        {
          stt: 1,
          code: "010100202924",
          name: "Lập trình ứng dụng doanh nghiệp trong .NET",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 2,
          code: "010100018106",
          name: "Thực tập an toàn thông tin",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 3,
          code: "010100018406",
          name: "	Thực hành lập trình .NET",
          tc: 4,
          number: 0,
          permission: 0,
        },
        {
          stt: 4,
          code: "010100136806",
          name: "Thực hành web",
          tc: 1,
          number: 0,
          permission: 0,
        },
        {
          stt: 5,
          code: "010100202706",
          name: "Lập trình web với Java",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 6,
          code: "010100212981",
          name: "	Kỹ năng phỏng vấn xin việc",
          tc: 2,
          number: 0,
          permission: 0,
        },
        {
          stt: 7,
          code: "010100057352",
          name: "	Tư tưởng Hồ Chí Minh",
          tc: 2,
          number: 0,
          permission: 0,
        },
      ],
    },
  ];

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className=" w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div>
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Thông tin điểm danh
                </h2>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>
                <div className=" overflow-x-auto w-full">

                  <table className="border border-gray-200 table-fixed xs:w-[900px] lg:w-full">
                    <thead>
                      <tr className="py-8 bg-cyan-500">
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          STT
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Mã lớp học phần
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Tên môn học/học phần
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          TC
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Số tiết nghỉ có phép
                        </th>
                        <th className="text-center text-white tracking-wider">
                          Số tiết nghỉ không phép
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {FakeApi.map((infor) => (
                        <React.Fragment key={infor.id}>
                          <tr
                            onClick={() => handleToggle(infor.id)}
                            className="cursor-pointer bg-gray-100 hover:bg-gray-200"
                          >
                            <td
                              colSpan="6"
                              className="py-3 pl-2 font-bold text-red-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left"
                            >
                              {infor.semester}
                            </td>
                          </tr>
                          {isShow === infor.id &&
                            infor.data.map((item) => (
                              <tr key={item.stt}>
                                <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.stt}
                                </td>
                                <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.code}
                                </td>
                                <td className="border text-left font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.name}
                                </td>
                                <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.tc}
                                </td>
                                <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.number}
                                </td>
                                <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400">
                                  {item.permission}
                                </td>
                              </tr>
                            ))}
                        </React.Fragment>
                      ))}
                      <tr>
                        <td
                          colSpan={4}
                          className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                        >
                          Tổng
                        </td>
                        <td className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500">
                          3
                        </td>
                        <td className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500">
                          6
                        </td>
                      </tr>
                    </tbody>
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

export default ScoreInformation;

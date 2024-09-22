import React, { useState } from "react";

const LearningOutcomes = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const FakeApi = [
    {
      id: 1,
      semester: "1 (2021 - 2022)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "74,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Khá",
        },
      ],
    },
    {
      id: 2,
      semester: "2 (2021 - 2022)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "74,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Khá",
        },
      ],
    },
    {
      id: 3,
      semester: "1 (2022 - 2023)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "73,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Khá",
        },
      ],
    },
    {
      id: 4,
      semester: "2 (2022 - 2023)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "86,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Tốt",
        },
      ],
    },
    {
      id: 5,
      semester: "1 (2023 - 2024)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "92,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Xuất sắc",
        },
      ],
    },
    {
      id: 6,
      semester: "2 (2023 - 2024)",
      data: [
        {
          stt: 1,
          code: "Điểm rèn luyện",
          name: "70,00",
        },
        {
          stt: 2,
          code: "Xếp loại",
          name: "Khá",
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
        <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div>
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Kết quả rèn luyện
                </h2>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>
                <table className="border border-gray-200 table-auto w-full">
                  <thead>
                    <tr className="py-8 bg-cyan-500">
                      <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                        STT
                      </th>
                      <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                        Ngày vi phạm
                      </th>
                      <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                        Nội dung
                      </th>
                      <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                        Hình thức
                      </th>
                      <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                        Ghi chú
                      </th>
                      <th className="text-center text-white tracking-wider">
                        Điểm Cộng/Trừ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {FakeApi.map((infor) => (
                      <React.Fragment key={infor.id}>
                        <tr className="cursor-pointer bg-gray-100 hover:bg-gray-200">
                          <td
                            colSpan="6"
                            className="py-3 pl-2 font-bold text-red-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left"
                          >
                            {infor.semester}
                          </td>
                        </tr>
                        {infor.data.map((item) => (
                          <tr key={item.stt}>
                            <td
                              colSpan={3}
                              className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-yellow-500"
                            >
                              {item.code}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.name}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400"></td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-400"></td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LearningOutcomes;

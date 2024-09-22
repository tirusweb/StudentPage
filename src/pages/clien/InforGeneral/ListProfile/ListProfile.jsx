import React, { useState } from "react";

const ListProfiles = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const APIlist = [
    {
      id: 1,
      code: 3,
      name: "Hồ sơ HSSV",
      updateAt: "13/11/2021 10:54",
      batbuoc: "chon",
      done: "chon",
    },
    {
      id: 2,
      code: 7,
      name: "Giấy xác nhận hưởng chế độ chính sách",
      updateAt: "",
      batbuoc: "chon",
      done: "",
    },
    {
      id: 3,
      code: 11,
      name: "Học bạ THPT (bản sao)",
      updateAt: "13/11/2021 10:54",
      batbuoc: "chon",
      done: "chon",
    },
    {
      id: 4,
      code: 39,
      name: "Bằng tốt nghiệp PTTH (bản chính)",
      updateAt: "11/06/2022 17:11",
      batbuoc: "",
      done: "chon",
    },
    {
      id: 5,
      code: 40,
      name: "Học bạ THPT (bản chính)",
      updateAt: "11/06/2022 17:11",
      batbuoc: "",
      done: "chon",
    },
    {
      id: 6,
      code: 73,
      name: "02 ảnh 4x6",
      updateAt: "11/06/2022 17:11",
      batbuoc: "chon",
      done: "",
    },
    {
      id: 7,
      code: 78,
      name: "Hồ sơ sinh viên (1 túi đựng và 2 bản lý lịch có xác nhận của chính quyền địa phương)",
      updateAt: "11/06/2022 17:11",
      batbuoc: "",
      done: "",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className=" container w-screen  overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className=" lg:mx-14 xs:mx-0  my-4">
            <div className="bg-white rounded pb-10">
              <div className="">
                <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                  {" "}
                  Danh sách hồ sơ cá nhân
                </h2>
                <div className=" border-t mt-4  border-gray-100 border-solid"></div>
                <div className="">
                  <table className=" table-auto w-full ">
                    <thead>
                      <tr className=" w-full h-10 text-center leading-10  bg-blue-500 text-white font-bold text-sm   grid grid-cols-12">
                        <th className=" border border-gray-200 col-span-1">
                          STT
                        </th>
                        <th className=" border border-gray-200 col-span-1">
                          {" "}
                          Mã hồ sơ
                        </th>
                        <th className=" border border-gray-200 col-span-6">
                          Tên hồ sơ
                        </th>
                        <th className=" border border-gray-200 col-span-2">
                          Ngày cập nhật
                        </th>
                        <th className=" border border-gray-200 col-span-1">
                          Bắt buộc
                        </th>
                        <th className=" border border-gray-200 col-span-1">
                          Đã nộp
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {APIlist.map((list) => (
                        <tr
                          key={list.id}
                          className=" hover:bg-blue-200 h-8 font-semibold lg:text-sm xs:text-xs text-gray-500 grid grid-cols-12"
                        >
                          <td className="border border-gray-200 px-2 text-center col-span-1">
                            {list.id}
                          </td>
                          <td className="border border-gray-200 px-2 col-span-1 text-center ">
                            {" "}
                            {list.code}
                          </td>
                          <td className="border border-gray-200 px-2 col-span-6 text-left">
                            {list.name}
                          </td>
                          <td className="border border-gray-200 px-2 col-span-2 text-center">
                            {list.updateAt}
                          </td>
                          <td className="border border-gray-200 px-2 text-center col-span-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className={`size-6 text-green-500 font-bold ${
                                list.batbuoc === "" ? "  hidden" : " block"
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </td>
                          <td className="border border-gray-200 px-2 text-center col-span-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className={`size-6 text-green-500 font-bold ${
                                list.done === "" ? " hidden" : "block"
                              }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </td>
                        </tr>
                      ))}
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

export default ListProfiles;

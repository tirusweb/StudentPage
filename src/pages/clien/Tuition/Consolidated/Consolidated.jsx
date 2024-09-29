import React, { useState } from "react";

const Consolidated = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const FakeApi = [
    {
      id: 1,
      number: 63574,
      code: "",
      date: "14/07/2024 09:53",
      money: "5.160.000",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 2,
      number: 457475,
      code: "",
      date: "16/04/2024 14:29",
      money: "30.000	",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 3,
      number: 664908,
      code: "",
      date: "16/04/2024 14:29",
      money: "6.450.000",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 4,
      number: 623836,
      code: "",
      date: "05/11/2023 22:54",
      money: "11.180.000",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 5,
      number: 428081,
      code: "",
      date: "05/11/2023 22:54",
      money: "680.400",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 5,
      number: 428081,
      code: "",
      date: "05/11/2023 22:54",
      money: "680.400",
      revenue: "NH000005 BaoKim",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 6,
      number: 583106,
      code: "",
      date: "13/03/2023 11:20",
      money: "9.030.000",
      revenue: "Phạm Thị Minh Hương",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 7,
      number: 566792,
      code: "1568",
      date: "24/10/2022 17:23	",
      money: "8.600.000",
      revenue: "Lê Thị Hồng Hạnh",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 8,
      number: 399561,
      code: "",
      date: "24/10/2022 17:23",
      money: "564.000",
      revenue: "Lê Thị Hồng Hạnh",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 9,
      number: 535771,
      code: "13033",
      date: "19/04/2022 16:03",
      money: "9.030.000",
      revenue: "Lê Thị Hồng Hạnh",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 10,
      number: 519817,
      code: "0002239",
      date: "02/12/2021 15:10",
      money: "2.150.000",
      revenue: "Đinh Viết Xuân",
      type: " Cá nhân",
      hddt: " icon",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 11,
      number: 368474,
      code: "",
      date: "19/08/2021 09:55",
      money: "1.470.000",
      revenue: "Lê Thị Hồng Hạnh",
      type: " Cá nhân",
      hddt: " ",
      detail: "icon",
      diary: " icon",
    },
    {
      id: 12,
      number: 478540,
      code: "0035872",
      date: "19/08/2021 09:55",
      money: "4.730.000",
      revenue: "Lê Thị Hồng Hạnh",
      type: " Cá nhân",
      hddt: "icon",
      detail: "icon",
      diary: " icon",
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
                <div className=" xs:block mx-4 ">
                  <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                    Thanh toán trực tuyến
                  </h2>
                </div>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>
                <div className=" overflow-x-auto w-full">
                  <table className=" overflow-x-auto border border-gray-200 table-fixed xs:w-[900px]  lg:w-full">
                    <thead>
                      <tr className="py-8 bg-cyan-500">
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          STT
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Số phiếu
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Mã hóa đơn
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Ngày thu
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Số tiền
                        </th>
                        <th className="text-center  border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Đơn vị thu
                        </th>
                        <th className="text-center  border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Loại HĐĐT
                        </th>
                        <th className="text-center  border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          HĐĐT
                        </th>
                        <th className="text-center  border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Chi tiết
                        </th>
                        <th className="text-center  border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Nhật ký
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {FakeApi.map((list) => (
                        <tr
                          key={list.id}
                          className="cursor-pointer bg-white hover:bg-yellow-100"
                        >
                          <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                            {list.id}
                          </td>
                          <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                            {list.number}
                          </td>
                          <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left">
                            {list.code}
                          </td>
                          <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                            {list.date}
                          </td>
                          <td className=" flex items-center justify-center py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right">
                            {list.money}
                          </td>
                          <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left">
                            {list.revenue}
                          </td>
                          <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                            {list.type}
                          </td>
                          <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                            {list.hddt === " " ? (
                              " "
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                />
                              </svg>
                            )}
                          </td>
                          <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right">
                            {list.detail === " " ? (
                              " "
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                            )}
                          </td>
                          <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right">
                            {list.diary === "" ? (
                              " "
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                />
                              </svg>
                            )}
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
export default Consolidated;

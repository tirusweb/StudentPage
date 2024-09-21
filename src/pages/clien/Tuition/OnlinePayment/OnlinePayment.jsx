import React from "react";

const OnlinePayment = () => {
  const FakeApi = [
    {
      id: 1,
      code: "010100212981",
      name: "Ky nang phong van xin viec",
      tc: 1,
      permision: "có",
      peyment: "485.000",
    },
    {
      id: 2,
      code: "010100202706",
      name: "Lap trinh web voi Java",
      tc: 3,
      permision: "có",
      peyment: "1.455.000",
    },
    {
      id: 3,
      code: "010100018106",
      name: "Thuc tap an toan thong tin",
      tc: 2,
      permision: "có",
      peyment: "970.000",
    },
    {
      id: 4,
      code: "010100018406",
      name: "Thuc hanh lap trinh .NET",
      tc: 3,
      permision: "có",
      peyment: "1.455.000",
    },
    {
      id: 5,
      code: "010100136806",
      name: "Thuc hanh web",
      tc: 3,
      permision: "có",
      peyment: "1.455.000",
    },
  ];

  return (
    <>
      <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div>
              <div className="lg:flex xs:block items-center justify-between mx-4 ">
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Thanh toán trực tuyến
                </h2>
                <div className=" flex items-center justify-center">
                  <p className=" mt-4 text-gray-500 font-normal text-sm mr-2">
                    Đợt
                  </p>
                  <select
                    className=" mt-4 border col-span-1 outline-blue-300 border-solid border-gray-200 rounded px-12 py-2 mr-4"
                    name="point"
                    id="points"
                  >
                    <option value="Tất cả">Tất cả</option>
                    <option value="Tất cả">1(2021 - 2022)</option>
                    <option value="Tất cả">2(2021 - 2022)</option>
                    <option value="Tất cả">1(2022 - 2023)</option>
                    <option value="Tất cả">Hockyphu(2021 - 2022)</option>
                    <option value="Tất cả">2(2022 - 2023)</option>
                    <option value="Tất cả">Hockyphu(2022 - 2023)</option>
                    <option value="Tất cả">1(2023 - 2024)</option>
                    <option value="Tất cả">2(2023 - 2024)</option>
                    <option value="Tất cả">Hockyphu(2023 - 2024)</option>
                    <option value="Tất cả">1(2024 - 2025)</option>
                  </select>
                </div>
              </div>
              <div className="border-t mt-4 border-gray-100 border-solid"></div>
              <table className=" overflow-x-auto border border-gray-200 table-auto w-full">
                <thead>
                  <tr className="py-8 bg-cyan-500">
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      STT
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Mã
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Nội dung thu
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Tín chỉ
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Bắt buộc
                    </th>
                    <th className="text-center text-white tracking-wider">
                      Số tiền (VND)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FakeApi.map((list) => (
                    <tr key={list.id} className="cursor-pointer bg-gray-100">
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                        {list.id}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                        {list.code}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left">
                        {list.name}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                        {list.tc}
                      </td>
                      <td className=" flex items-center justify-center py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                        {list.permision === "" ? (
                          " "
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-green-400 "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 pl-2 font-normal pr-3 text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right">
                        {list.peyment}
                      </td>
                    </tr>
                  ))}
                  <tr className="cursor-pointer bg-gray-100">
                    <td
                      colSpan={5}
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right pr-2"
                    >
                      Tổng thanh toán :
                    </td>
                    <td
                      colSpan={1}
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-right pr-3"
                    >
                      0
                    </td>
                  </tr>
                  <tr className="cursor-pointer bg-gray-100">
                    <td
                      colSpan={6}
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left pr-2"
                    >
                      <p className=" font-normal text-lg text-gray-500 ">
                        1. Để thanh toán trực tuyến qua ngân hàng{" "}
                        <b className=" font-bold text-red-500 text-lg">
                          thẻ ATM
                        </b>{" "}
                        phải đăng ký{" "}
                        <b className=" font-bold text-red-500 text-sm">
                          Thanh toán online
                        </b>
                        .{" "}
                      </p>
                      <p className=" font-normal text-lg text-gray-500">
                        2. Vui lòng kiểm tra{" "}
                        <b className=" font-bold text-red-500 text-lg">
                          HẠN MỨC THẺ
                        </b>{" "}
                        trước khi thanh toán{" "}
                      </p>
                      <p className=" font-normal text-lg text-gray-500">
                        3. Xem hướng dẫn thanh toán{" "}
                        <a
                          href="https://ascvn.com.vn/huong-dan-thao-tac-sinh-vien-thanh-toan-hoc-phi-online.html"
                          className=" text-blue-400 font-normal text-sm"
                          href=""
                        >
                          Tại đây
                        </a>{" "}
                      </p>
                      <p className=" font-normal text-lg text-gray-500">
                        4. Để hủy giao dịch chờ gạch nợ, vui lòng bấm{" "}
                        <a
                          href="#"
                          className=" text-blue-400 font-normal text-sm"
                          href=""
                        >
                          Vào đây
                        </a>{" "}
                      </p>
                      <p className=" font-normal text-lg text-gray-500">
                        5. Khuyến cáo thanh toán qua{" "}
                        <b className=" font-bold text-red-500 text-lg">
                          QR-Code{" "}
                        </b>
                        , thẻ ATM nội địa.{" "}
                      </p>
                    </td>
                  </tr>
                  <tr className="cursor-pointer bg-gray-100">
                    <td
                      colSpan={5}
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-lg   xs:text-xs text-left pr-2"
                    >
                      Chon ngân hàng thanh toán
                    </td>
                    <td
                      colSpan={1}
                      className=" flex items-center justify-end py-3 pl-2 font-semibold text-gray-500 lg:text-sm  xs:text-xs  pr-2"
                    >
                      <button className=" shadow-lg text-white uppercase rounded bg-orange-500 hover:bg-orange-400 px-8 py-4 ">
                        thanh toán
                      </button>
                    </td>
                  </tr>
                  <tr className="cursor-pointer bg-gray-100">
                    <td
                      colSpan={6}
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left pr-2"
                    >
                      <img
                        className="flex lg:ml-[50%] items-center justify-center w-36 h-36"
                        src="https://baokim.vn/assets/images/Baokim-logo-square.png"
                      ></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlinePayment;

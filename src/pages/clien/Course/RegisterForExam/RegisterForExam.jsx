import React, { useState } from "react";

const RegisterForExam = () => {
  const [isShow, setIsShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(true);

  setTimeout(() => {
    setLoadings(false);
  }, 1000);

  const handle = (value) => {
    setLoading(true);

    setTimeout(() => {
      setIsShow(value);
      setLoading(false);
    }, 1000); //
  };

  return (
    <>
      {loadings ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div>
                <div className="lg:flex xs:block items-center justify-between mx-4">
                  <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                    Đăng ký thi
                  </h2>
                  <div className="flex items-center">
                    <div className="mt-6 mr-4 flex items-center mb-2">
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
                        Thi lại
                      </label>
                    </div>
                    <div className="mt-6 mr-4 flex items-center mb-2">
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
                        Thi cải thiện
                      </label>
                    </div>
                    <select
                      className="flex items-center mt-4 border col-span-1 outline-blue-300 border-solid border-gray-200 rounded px-12 py-2 mr-4"
                      name="point"
                      onChange={(e) => handle(e.target.value)}
                      id="points"
                    >
                      <option value="Tất cả">1(2021 - 2022)</option>
                      <option value="Tất cả1">2(2021 - 2022)</option>
                      <option value="Tất cả2">1(2022 - 2023)</option>
                      <option value="Tất cả3">Hockyphu(2021 - 2022)</option>
                      <option value="Tất cả4">2(2022 - 2023)</option>
                      <option value="Tất cả5">Hockyphu(2022 - 2023)</option>
                      <option value="Tất cả6">1(2023 - 2024)</option>
                      <option value="Tất cả7">2(2023 - 2024)</option>
                      <option value="Tất cả8">Hockyphu(2023 - 2024)</option>
                      <option value="Tất cả9">1(2024 - 2025)</option>
                    </select>
                  </div>
                </div>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>

                {loading ? (
                  <div className="flex items-center justify-center h-48">
                    <div className="relative">
                      <span className="text-blue-500 font-bold text-xl">
                        Loading...
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <p
                      className={`${
                        isShow ? " inline-table" : "hidden"
                      } mt-10 font-bold text-gray-400 xs:text-xs lg:text-lg mb-2 border-l-4 ml-2 border-solid border-red-500 `}
                    >
                      học phần được phép đăng ký thi
                    </p>
                    <table
                      className={`${
                        isShow ? " inline-table" : "hidden"
                      } overflow-x-auto border border-gray-200 table-auto w-full`}
                    >
                      <thead>
                        <tr className="py-8 bg-cyan-500">
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            STT
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Ngày khen thưởng
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Tên loại khen thưởng
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Tên khen thưởng
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Tên đợt
                          </th>
                          <th className="text-center text-white tracking-wider">
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cursor-pointer bg-gray-100 hover:bg-gray-200">
                          <td
                            colSpan="6"
                            className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center"
                          >
                            Không có dữ liệu hiển thị
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p
                      className={`${
                        isShow ? " inline-table" : "hidden"
                      } mt-10 font-bold text-gray-400 xs:text-xs lg:text-lg mb-2 border-l-4 ml-2 border-solid border-red-500 `}
                    >
                      học phần đã đăng ký thi trong học kỳ này
                    </p>

                    <table
                      className={`${
                        isShow ? " inline-table" : "hidden"
                      } overflow-x-auto border border-gray-200 table-auto w-full`}
                    >
                      <thead>
                        <tr className="py-8 bg-cyan-500">
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            STT
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Ngày xử lý
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Hành vi
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Xử lý
                          </th>
                          <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                            Tên đợt
                          </th>
                          <th className="text-center text-white tracking-wider">
                            Ghi chú
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cursor-pointer bg-gray-100 hover:bg-gray-200">
                          <td
                            colSpan="6"
                            className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center"
                          >
                            Không có dữ liệu hiển thị
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForExam;

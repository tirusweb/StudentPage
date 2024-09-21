import React from "react";

const Reward = () => {
  return (
    <>
      <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div>
              <div className="lg:flex xs:block items-center justify-between mx-4 ">
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Tất Cả
                </h2>
                <select
                  className=" mt-4 border col-span-1 outline-blue-300 border-solid border-gray-200 rounded px-12 py-2 mr-4"
                  name="point"
                  id="points"
                >
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
              <div className="border-t mt-4 border-gray-100 border-solid"></div>
              <table className=" overflow-x-auto border border-gray-200 table-auto w-full">
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
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                    >
                      Không có dữ liệu hiển thị
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className= "overflow-x-auto border border-gray-200 table-auto w-full">
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
                      className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                    >
                      Không có dữ liệu hiển thị
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

export default Reward;

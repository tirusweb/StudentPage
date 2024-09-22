import React, { useState } from "react";

const SchoolCalender = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
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
                  Lịch toàn trường
                </h2>
                <div className=" border-t mt-4  border-gray-100 border-solid"></div>
                <div className=" grid grid-cols-3 mt-4 gap-4 mx-2">
                  <select
                    className="border col-span-1 border-solid border-gray-200 rounded px-12 py-2 mr-4"
                    name="point"
                    id="points"
                  >
                    <option value="Tất cả">Chọn hệ đào tạo</option>
                    <option value="Mới">Đại học - Tín chỉ</option>
                    <option value="Chưa xem">Đại học - Niên chế</option>
                    <option value="Hết hạn">Cao đẳng - Tín chỉ</option>
                    <option value="Hết hạn">Cao đẳng - Niên chế</option>
                    <option value="Hết hạn">
                      Trung cấp chuyên nghiệp - Niên chế
                    </option>
                    <option value="Hết hạn">Thạc sĩ - Tín chỉ</option>
                    <option value="Hết hạn">Đại học - Từ xa</option>
                  </select>
                  {/*  */}
                  <select
                    className="border col-span-1 border-solid border-gray-200 rounded px-12 py-2 mr-4"
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
                  {/*  */}
                  <select
                    className="border col-span-1 border-solid border-gray-200 rounded px-12 py-2 mr-4"
                    name="point"
                    id="points"
                  >
                    <option value="Tất cả">Khoa Công nghệ thông tin HN</option>
                    <option value="Mới">Khoa Thương mại NĐ</option>
                    <option value="Chưa xem">
                      Khoa Quản trị và Marketing HN
                    </option>
                    <option value="Hết hạn">
                      Khoa Dệt may và Thời trang HN
                    </option>
                    <option value="Hết hạn">Khoa Kế toán Kiểm toán ND</option>
                    <option value="Hết hạn">
                      Khoa Du lịch và Khách sạn ND
                    </option>
                    <option value="Hết hạn">
                      Trung tâm giáo dục Quốc phòng - An ninh HN
                    </option>
                    <option value="Hết hạn">Khoa Điện - Tự động hóa HN</option>
                    <option value="Hết hạn">
                      Khoa Dệt may và Thời trang ND
                    </option>
                    <option value="Hết hạn">
                      Khoa Lý luận chính trị và Pháp luật HN
                    </option>
                  </select>
                </div>
                <div className=" grid grid-cols-4 gap-4 mx-2 mt-4">
                  <input
                    className=" col-span-1 text-gray-600 font-semibold text-sm outline-blue-200 px-2 py-2 border   border-gray-200 border-solid   "
                    placeholder="Lớp học"
                    type="text"
                  ></input>
                  <input
                    className=" col-span-1 text-gray-600 font-semibold text-sm outline-blue-200 px-2 py-2 border   border-gray-200 border-solid   "
                    placeholder="Mã môn / Tên môn"
                    type="text"
                  ></input>
                  <div className=" col-span-1 flex items-center ">
                    <div className="flex items-center">
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
                    <div className="flex items-center mx-4 ">
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
                  </div>
                  <div className=" col-span-1  ">
                    <button className="px-4 py-2 rounded hover:bg-cyan-400 bg-cyan-500 text-white font-semibold text-sm ">
                      Xem lịch
                    </button>
                  </div>
                </div>
                <div className=" border-t mt-4  border-gray-100 border-solid"></div>
                <p className=" mx-2 mt-2 text-gray-500 text-sm font-bold ">
                  {" "}
                  Không có dữ liệu hiển thị
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolCalender;

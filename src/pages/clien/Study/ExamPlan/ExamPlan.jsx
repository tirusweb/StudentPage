import React, { useState } from "react";

const ExamPlan = () => {
  const [isShow, estIsShow] = useState(false);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const toggleShow = () => {
    estIsShow(!isShow);
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container  xs:w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div>
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Thông tin kế hoạch thi
                </h2>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>
                <div className=" grid grid-cols-6 gap-4 mx-2 mt-4">
                  <select
                    className=" lg:col-span-2 xs:col-span-6 border border-solid border-gray-200 rounded px-12 py-2 mr-4"
                    name="point"
                    id="points"
                  >
                    <option value="Tất cả">Chọn đợt</option>
                    <option value="Mới">1 (2021 - 2022)</option>
                    <option value="Chưa xem">2 (2021 - 2022)</option>
                    <option value="Hết hạn">1 (2022 - 2023)</option>
                    <option value="Hết hạn">2 (2022 - 2023)</option>
                    <option value="Hết hạn">1 (2023 - 2024)</option>
                    <option value="Hết hạn">2 (2023 - 2024)</option>
                  </select>
                  <input
                    className=" lg:col-span-2 xs:col-span-6 border border-gray-200 outline-blue-300 px-4   "
                    type="text"
                    placeholder="Mã môn học/ Tên môn học "
                  />
                  <button
                    onClick={toggleShow}
                    className="xs:col-span-6 lg:col-span-1 lg:col-end-7 bg-cyan-500 hover:bg-cyan-400 text-white rounded font-semibold lg:text-sm xs:text-xs "
                  >
                    {" "}
                    Xem Kế hoạch{" "}
                  </button>
                </div>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>

                <p
                  className={` ${
                    isShow ? "block" : " hidden"
                  } text-gray-400 font-semibold lg:text-sm xs:text-xs ml-2 mt-4`}
                >
                  Không có dữ liệu để hiển thị
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamPlan;

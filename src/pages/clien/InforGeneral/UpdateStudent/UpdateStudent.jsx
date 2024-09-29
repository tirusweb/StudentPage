import React, { useState } from "react";

const UpdateStudent = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const ApioptionBank = [
    {
      id: 1,
      bank: "Agribank",
    },
    {
      id: 2,
      bank: "Vietcombank",
    },
    {
      id: 3,
      bank: "VietinBank",
    },

    {
      id: 4,
      bank: "BIDV",
    },
    {
      id: 5,
      bank: "Oceanbank",
    },
    {
      id: 6,
      bank: "GPBank",
    },
    {
      id: 7,
      bank: "MBBank",
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
            <div className="bg-white pb-6 rounded">
              <div className="">
                <div className="  my-4">
                  <div className="flex items-center justify-between">
                    <h2 className=" text-blue-400  font-bold text-xl pl-3 pt-2">
                      Cập nhật thông tin sinh viên
                    </h2>
                    <button className=" bg-blue-500 text-white font-bold text-sm cursor-pointer px-4 py-2 rounded hover:bg-blue-400 mr-4 mt-2">
                      Lưu
                    </button>
                  </div>
                  <div className=" border-t border-gray-200 border-solid mt-2"></div>
                  <div className="grid mt-3 grid-cols-2 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-2">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Họ đệm
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value="Nguyễn Trung"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-2  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Tên
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Hiếu"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 gap-4 px-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Dân tộc
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value="Kinh">Kinh</option>
                      </select>
                    </div>
                    <div className="lg:col-span-1 flex items-center justify-around  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Giới tính
                      </p>
                      <div className=" flex items-center justify-between">
                        <div className="mr-3 flex">
                          <input
                            checked
                            disabled
                            readOnly
                            className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                            value="Nam"
                            type="radio"
                          ></input>
                          <p className=" text-gray-400 font-semibold text-sm">
                            Nam
                          </p>
                        </div>
                        <div className="  flex">
                          <input
                            disabled
                            readOnly
                            className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                            value="Nữ"
                            type="radio"
                          ></input>
                          <p className=" text-gray-400 font-semibold text-sm">
                            Nữ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Ngày sinh
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="2003-11-28"
                        type="date"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Tôn giáo
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value="Không">Không</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi sinh Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value="Chọn nơi sinh huyện">
                          Chọn nơi sinh huyện
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi sinh Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value="Quảng Bình">Quảng Bình</option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi sinh Xã/ Phường
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi sinh Phường/Xã
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value="Chọn phường xã">Chọn phường xã</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Ngày cấp
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="2021-06-29"
                        type="date"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi cấp
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option className="text-gray-600" value="Quảng Bình">
                          Quảng Bình
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi cấp CMND
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Cục trưởng cục cảnh sát quản lý hành chính về trật tự xã hội "
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Quốc tịch
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Số CMND
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" 0333849488884"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Địa chỉ Email
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Số di động hoặc SĐT cơ quan
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Số điện thoại
                      </p>
                      <input
                        className=" text-gray-600 font-semibold text-sm outline-blue-300 px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="0705933950"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Mã BHYT/ BHXH
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-2 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-2">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Địa chỉ nơi thường trú
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value="Tuyên Hóa, Quảng Bình"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-2  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nguyên quán
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Quảng Bình"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-2 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-2">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Địa chỉ cơ quan
                      </p>
                      <input
                        readOnly
                        className=" text-gray-500 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value="số nhà, đường, xã/phường, huyện/quận, tỉnh/thành phố
"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-2  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Địa chỉ nơi đang cư ngụ
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Xã Đồng Hóa, Huyện Tuyên Hóa, Quảng Bình"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn Tỉnh/ Thành phố
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Huyện/ Quận">
                          {" "}
                          Chọn Huyện/ Quận
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Xã/ Phường
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Xã/ Phường">
                          {" "}
                          Chọn Xã/ Phường
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        HKTT Số nhà
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Số nhà"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn Tỉnh/ Thành phố
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Huyện/ Quận">
                          {" "}
                          Chọn Huyện/ Quận
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Hộ khẩu thường trú Xã/ Phường
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Xã/ Phường">
                          {" "}
                          Chọn Xã/ Phường
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        HKTT Số nhà
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Số nhà"
                        type="text"
                      ></input>
                    </div>
                  </div>{" "}
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Số nhà
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Số nhà"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn Tỉnh/ Thành phố
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Huyện/ Quận">
                          {" "}
                          Chọn Huyện/ Quận
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Xã/ Phường
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Xã/ Phường">
                          {" "}
                          Chọn Xã/ Phường
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Số nhà
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Số nhà"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn Tỉnh/ Thành phố
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Huyện/ Quận">
                          {" "}
                          Chọn Huyện/ Quận
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Xã/ Phường
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Xã/ Phường">
                          {" "}
                          Chọn Xã/ Phường
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-2  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        DCLL Thôn xóm
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="Ấp/Đường/xóm/KV.."
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi cấp GKS Tỉnh/ Thành phố
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn Tỉnh/ Thành phố
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi cấp GKS Huyện/ Quận
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Huyện/ Quận">
                          {" "}
                          Chọn Huyện/ Quận
                        </option>
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Nơi cấp GKS Xã/ Phường
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option value=" Chọn Xã/ Phường">
                          {" "}
                          Chọn Xã/ Phường
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div className="grid mt-4 grid-cols-4 px-4  gap-4">
                    <p className=" xs:col-span-4 lg:col-span-1 font-bold text-lg text-blue-500 ">
                      Thông tin ngân hàng
                    </p>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Ngân hàng
                      </p>

                      <select
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        {ApioptionBank.map((optionBank) => (
                          <option
                            key={optionBank.id}
                            className=" text-sm "
                            value={optionBank.bank}
                          >
                            {optionBank.bank}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Số tài khoản
                      </p>
                      <input
                        className=" text-gray-600 font-semibold text-sm outline-blue-300  px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="0001811152067"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Tên chủ tài khoản
                      </p>
                      <input
                        className=" text-gray-600 font-semibold text-sm outline-blue-300  px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value="NGUYEN TRUNG HIEU"
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Thành phần xuất thân
                      </p>
                      <select
                        disabled
                        readOnly
                        className="text-gray-600 font-semibold teưxt-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        name="dantocc"
                        id="dantocs"
                      >
                        <option
                          className=" text-sm "
                          value="Chọn Tỉnh/ Thành phố"
                        >
                          Chọn
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Năm tốt nghiệp THPT
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-2  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Trường tốt nghiệp THPT
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Mã BHXH
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Mã BHYT
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-12 px-4  gap-4">
                    <div className="lg:col-span-2 xs:col-span-12">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Điểm môn 1
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-2 xs:col-span-12">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Điểm môn 2
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-2 xs:col-span-12">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Điểm môn 3
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-3  xs:col-span-12  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Điểm thưởng (nếu có)
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-3  xs:col-span-12  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Đối tượng dự thi
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-2 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-2">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Ký hiệu trường
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-2  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Số báo danh
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-2 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Kết quả học lớp cuối cấp ở THPT, THBT, THN, TCCN
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Xếp loại về học tập
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-2 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Kết quả học lớp cuối cấp ở THPT, THBT, THN, TCCN
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Xếp loại về học tập
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-1 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Xếp loại về hạnh kiểm
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></input>
                    </div>
                    <div className="lg:col-span-1  xs:col-span-4  ">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Xếp loại về tốt nghiệp
                      </p>
                      <input
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none cursor-not-allowed px-2 py-2 border   w-full border-gray-400 border-solid bg-gray-200 "
                        value=" "
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-4 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Đề xuất thông tin khác
                      </p>
                      <textarea
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-4 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Lý do tuyển thẳng và được thưởng điểm
                      </p>
                      <textarea
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-4 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Khen thưởng, kỷ luật
                      </p>
                      <textarea
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid mt-3 grid-cols-4 px-4  gap-4">
                    <div className="lg:col-span-4 xs:col-span-4">
                      <p className=" text-gray-400 text-sm font-semibold ">
                        Tóm tắt quá trình học tập, công tác và lao động
                      </p>
                      <textarea
                        readOnly
                        className=" text-gray-600 font-semibold text-sm outline-none px-2 py-2 cursor-not-allowed border  w-full border-gray-400 border-solid  bg-gray-200 "
                        value=""
                        type="text"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateStudent;

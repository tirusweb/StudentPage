import React, { useState } from "react";

const RegisterCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const FakeApi = [
    {
      id: 1,
      code: "0101001848",
      hp: "010100184801 - DHTI15A1HN",
      name: "Thực tập Hệ quản trị CSDL Oracle",
      tc: 3,
      permision: "có",
      status: "Đã khóa",
      maxcount: 35,
      count: " 47/35",
      data: [
        {
          id: 1,
          calender: "TH - Thứ 3 (Tiết 1 -> 6 )",
          base: " Hà nội",
          rowhouse: "Lĩnh Nam - HA9",
          room: ":https://meet.google.com/imn-nhkx-nzn",
          time: "17/09/2024 - 17/09/2024",
          teacher: "THS Trần Thanh Đại",
        },
        {
          id: 2,
          calender: "TH - Thứ 3 (Tiết 13 -> 16 )",
          base: " Hà nội",
          rowhouse: "Lĩnh Nam - HA9",
          room: ":https://meet.google.com/imn-nhkx-nzn",
          time: "24/09/2024 - 19/11/2024",
          teacher: "THS Trần Thanh Đại",
        },
        {
          id: 3,
          calender: "TH - Thứ 3 (Tiết 1 -> 6 )",
          base: " Hà nội",
          rowhouse: "Meet_Khoa Công nghệ thông tin",
          room: ":https://meet.google.com/imn-nhkx-nzn",
          time: "17/09/2024 - 17/09/2024",
          teacher: "THS Trần Thanh Đại",
        },
      ],
    },
    {
      id: 2,
      code: "0101002147",
      hp: "010100214701 - DHTI15A1HN",
      name: "Thực hành công nghệ lập trình đa nền tảng cho ứng dụng di động",
      tc: 3,
      permision: "có",
      status: "Đã khóa",
      maxcount: 35,
      count: " 47/35",
      data: [
        {
          id: 1,
          calender: "TH - Thứ 2 (Tiết 14 -> 16 )",
          base: " Hà nội",
          rowhouse: "Meet_Khoa Công nghệ thông tin",
          room: ": https://meet.google.com/tsr-mree-dkg",
          time: "17/09/2024 - 17/09/2024",
          teacher: "THS Trần Thị Huệ",
        },
        {
          id: 2,
          calender: "TH - Thứ 3 (Tiết 13 -> 16 )",
          base: " Hà nội",
          rowhouse: "Lĩnh Nam - HA9",
          room: ": Phòng máy tính 02/H.A9-605",
          time: "24/09/2024 - 19/11/2024",
          teacher: "THS Trần Thị Huệ",
        },
        {
          id: 3,
          calender: "TH - Thứ 3 (Tiết 1 -> 6 )",
          base: " Hà nội",
          rowhouse: "Meet_Khoa Công nghệ thông tin",
          room: ":https://meet.google.com/imn-nhkx-nzn",
          time: "17/09/2024 - 17/09/2024",
          teacher: "THS Trần Thị Huệ",
        },
      ],
    },
  ];

  const FakeApiHP = [
    {
      id: 1,
      code: "010100212981",
      name: "Kỹ năng phỏng vấn xin việc",
      class: "DHTI15A4HN",
      tc: 1,
      tuition: "485.000",
      status: "Đăng ký mới",
      day: "28/08/2024",
      tus: "Đã khóa ",
    },
    {
      id: 2,
      code: "010100202924",
      name: "Lập trình ứng dụng doanh nghiệp trong .NET",
      class: "DHTI15A1HN",
      tc: 3,
      tuition: "1.455.000",
      status: "Đăng ký mới",
      day: "06/09/20244",
      tus: "Mở lớp ",
    },
    {
      id: 3,
      code: "010100202706",
      name: "Lập trình web với Java",
      class: "DHTI15A4HN",
      tc: 3,
      tuition: "1.455.000",
      status: "Đăng ký mới",
      day: "28/08/2024",
      tus: "Chỉ đăng ký ",
    },
    {
      id: 4,
      code: "010100018406",
      name: "Thực hành lập trình .NET",
      class: "DHTI15A4HN",
      tc: 3,
      tuition: "1.455.000",
      status: "Đăng ký mới",
      day: "28/08/2024",
      tus: "Đã khóa ",
    },
    {
      id: 5,
      code: "010100212981",
      name: "Thực tập an toàn thông tin",
      class: "DHTI15A4HN",
      tc: 2,
      tuition: "970.000	",
      status: "Đăng ký mới",
      day: "28/08/2024",
      tus: "Đã khóa ",
    },
    {
      id: 6,
      code: "010100212981",
      name: "Thực hành web",
      class: "DHTI15A4HN",
      tc: 3,
      tuition: "1.455.000",
      status: "Đăng ký mới",
      day: "28/08/2024",
      tus: "Đã khóa ",
    },
  ];

  return (
    <>
      <div className="container  xs:w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div>
              <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                Đăng ký học phần
              </h2>
              <div className="border-t mt-4 border-gray-100 border-solid"></div>
              <div className=" grid grid-cols-10 gap-2 mx-2 mt-4">
                <select
                  className=" lg:col-start-3 lg:col-span-3 xs:col-span-10 border border-solid border-gray-200 rounded px-12 py-2 mr-4"
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
                <div className=" col-span-1 flex items-center">
                  <input
                    type="radio"
                    id="tatca"
                    name="filter"
                    className=" accent-gray-500"
                  />
                  <label
                    className="text-gray-400 font-semibold ml-2 text-sm"
                    htmlFor="tatca"
                  >
                    Học mới
                  </label>
                </div>
                <div className=" col-span-1 flex items-center">
                  <input
                    type="radio"
                    id="lichhoc"
                    name="filter"
                    className=" accent-gray-500"
                  />
                  <label
                    className="text-gray-400 ml-2 font-semibold text-sm"
                    htmlFor="lichhoc"
                  >
                    Học lại
                  </label>
                </div>
                <div className="  col-span-2 flex items-center">
                  <input
                    type="radio"
                    id="lichthi"
                    name="filter"
                    className="mr-2 accent-gray-500"
                  />
                  <label
                    className="text-gray-400 ml-2 font-semibold text-sm"
                    htmlFor="lichthi"
                  >
                    Học cải thiện
                  </label>
                </div>
              </div>
              <div className="border-t mt-4 border-gray-100 border-solid"></div>
            </div>
            <p className=" font-bold text-gray-400 xs:text-xs lg:text-sm mb-2 border-l-4 ml-2 border-solid border-red-500 ">
              Môn học/học phần đang chờ đăng ký
            </p>

            <div className="">
              <table className="overflow-x-auto border border-gray-200 table-auto w-full">
                <thead>
                  <tr className="py-8 bg-cyan-500">
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      STT
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Mã học phần
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Tên môn học/học phần
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      TC
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Bắt buộc
                    </th>
                    <th className="text-center text-white tracking-wider">
                      học phần: học trước (a),
                      <br /> tiên quyết (b),
                      <br /> song hành (c)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FakeApi.map((list) => (
                    <tr
                      key={list.id}
                      className={`cursor-pointer ${
                        selectedCourse === list.id
                          ? "bg-yellow-100"
                          : "bg-white hover:bg-yellow-100"
                      }`}
                      onClick={() => setSelectedCourse(list.id)}
                    >
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                        {list.id}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                        {list.code}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-left">
                        {list.name}
                      </td>
                      <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                        {list.tc}
                      </td>
                      <td className="flex items-center justify-center py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                        {list.permision === "" ? (
                          ""
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 via-red-400 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        )}
                      </td>
                      <td className="py-3 pl-2 font-medium text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="grid grid-cols-12 mt-12 gap-2">
                <div className="col-span-6">
                  <p className="font-bold text-gray-400 xs:text-xs lg:text-sm mb-2 border-l-4 ml-2 border-solid border-red-500">
                    Lớp học phần chờ đăng ký
                  </p>
                  <div className="flex items-center justify-end">
                    <input type="checkbox" />
                    <p className="uppercase text-red-500 font-bold xs:text-xs lg:text-sm ml-2">
                      HIỂN THỊ LỚP HỌC PHẦN KHÔNG TRÙNG LỊCH
                    </p>
                  </div>
                  <table className="table-auto w-full overflow-x-auto border border-gray-200">
                    <thead>
                      <tr className="py-8 bg-cyan-500">
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          STT
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Thông tin lớp học phần
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Đã đăng ký
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {FakeApi.filter((list) => list.id === selectedCourse).map(
                        (list) => (
                          <tr
                            key={list.id}
                            className="cursor-pointer bg-yellow-100"
                          >
                            <td className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                              {list.id}
                            </td>
                            <td className="py-3 pl-2 font-semibold text-gray-500 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                              <p className="text-left font-bold text-black text-sm">{list.name}</p>
                              <p className="text-left ">
                                Trạng thái <b className=" font-normal text-red-500 text-sm">{list.status} </b> 
                              </p>
                              <p className="text-left">
                                Mã lớp học phần :  {list.hp}
                              </p>
                            </td>
                            <td className="py-3 pl-2 font-semibold text-blue-400 lg:text-sm border border-solid border-gray-200 xs:text-xs text-center">
                              {list.count}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="col-span-6">
                  <p className="font-bold text-gray-400 xs:text-xs lg:text-sm mb-2 border-l-4 ml-2 border-solid border-red-500">
                    Chi tiết lớp học phần
                  </p>
                  <table className="w-full table-auto overflow-x-auto border border-gray-200">
                    <thead>
                      <tr className="py-8 bg-cyan-500">
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Trạng thái: Đã khóa
                        </th>
                        <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                          Sĩ số tối đa: 35
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {FakeApi.filter(
                        (list) => list.id === selectedCourse
                      ).flatMap((list) =>
                        list.data.map((session) => (
                          <tr
                            key={session.id}
                            className="cursor-pointer bg-yellow-100 "
                          >
                            <td className="py-3 pl-2 font-normal  text-blue-400 lg:text-sm border border-solid border-gray-200 xs:text-xs text-left">
                              <p>
                                Lịch học : <b className=" font-bold text-black">{session.calender}</b>
                              </p>
                              <p>
                                Cơ sở <b className=" font-bold text-blue-500 text-sm">{session.base}</b>
                              </p>
                              <p>
                                Dãy nhà <b className=" font-bold text-blue-500 text-sm">{session.rowhouse}</b>
                              </p>
                              <p>
                                Phòng <b className=" font-bold text-blue-500 text-sm">{session.room}</b>
                              </p>
                            </td>
                            <td className="py-3 pl-2 font-semibold  text-black lg:text-sm border border-solid border-gray-200 xs:text-xs text-left">
                              <p>
                                GV <b className=" font-bold text-black text-sm">{session.teacher}</b>
                              </p>
                              <p>
                                <b className=" font-semibold text-blue-400 text-sm">{session.time}</b>
                              </p>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="mt-20 font-bold text-gray-400 xs:text-xs lg:text-sm mb-2 border-l-4 ml-2 border-solid border-red-500 ">
              Môn học/học phần đang chờ đăng ký
            </p>
            <table className="   overflow-x-auto border border-gray-200 table-auto w-full">
              <thead>
                <tr className="py-8 bg-cyan-500">
                  <th className="text-center text-sm border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                    Thao tác
                  </th>
                  <th className="text-center text-sm border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                    STT
                  </th>
                  <th className="text-center text-sm border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                    Mã lớp HP
                  </th>
                  <th className="text-center text-sm border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                    Tên môn học/HP
                  </th>
                  <th className="text-center text-sm border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                    Lớp học dự kiến
                  </th>
                  <th className="text-center text-xs  border-r border-white border-solid text-white tracking-wider">
                    TC
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Nhóm TH
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Học phí
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Hạn nộp
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Thu
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Trạng thái ĐK
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    Ngày ĐK
                  </th>
                  <th className="text-center text-sm  border-r border-white border-solid text-white tracking-wider">
                    TT lớp HP
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="cursor-pointer bg-gray-100 hover:bg-gray-200">
                  <td
                    colSpan={6}
                    className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                  >
                    Tổng
                  </td>

                  <td
                    colSpan={1}
                    className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                  >
                    17
                  </td>
                  <td
                    colSpan={6}
                    className="py-3 pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                  ></td>
                </tr>
                {FakeApiHP.map((listHP) => (
                  <tr
                    key={listHP.id}
                    className="cursor-pointer bg-white hover:bg-yellow-100"
                  >
                    <td className="py-3 flex items-center justify-center pl-2 font-bold text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
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
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.id}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.code}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left">
                      {listHP.name}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.class}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.tc}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.tuition}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"></td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"></td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.status}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.day}
                    </td>
                    <td className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center">
                      {listHP.tus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterCourse;

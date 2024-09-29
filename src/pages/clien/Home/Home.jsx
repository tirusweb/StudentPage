import React, { useState } from "react";
import ChartBar from "./BarChart";
import RadiaChart from "./RadiChart";
import avatar from "../../../image/avatar.png";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const navigate = useNavigate();

  const handleLink1 = () => navigate("/de-xuat-bieu-mau");
  const handleLink2 = () => navigate("/ghi-chu-nhac-nho");
  const handleLink3 = () => navigate("/ket-qua-hoc-tap");
  const handleLink4 = () => navigate("/lich-hoc-theo-tuan");
  const handleLink5 = () => navigate("/lich-theo-tien-do");
  const handleLink6 = () => navigate("/tra-cuu-cong-no");
  const handleLink7 = () => navigate("/thanh-toan-truc-tuyen");
  const handleLink8 = () => navigate("/phieu-thu-tong-hop");

  const ApiInforStudent = [
    {
      id: 1,
      msv: "21103100097",
      name: "Nguyễn Trung Hiếu",
      sex: "Nam",
      dayofbirth: "28/11/2003",
      nation: "Quảng Bình",
      class: "ĐHTI15A4HN",
      course: "2021-2025",
      train: " Đại Học",
      type: " Chính quy",
      branch: " Công nghệ thông tin",
    },
  ];

  const ApiTopics = [
    {
      id: 1,
      mhp: "093045789574",
      tenhp: "Thực hành quản trị mạng",
      tinchi: 3,
    },
    {
      id: 2,
      mhp: "03850869067",
      tenhp: "Thực hành lập trình mạng",
      tinchi: 3,
    },
    {
      id: 3,
      mhp: "04805890996",
      tenhp: "Công nghệ Java",
      tinchi: 3,
    },
    {
      id: 4,
      mhp: "05099985844",
      tenhp: "Lập trình .NET",
      tinchi: 4,
    },
    {
      id: 5,
      mhp: "05834857867",
      tenhp: "Công nghệ phần mềm",
      tinchi: 2,
    },
    {
      id: 6,
      mhp: "093045789574",
      tenhp: "Trí tuệ nhân tạo",
      tinchi: 3,
    },
    {
      id: 7,
      mhp: "09485974867",
      tenhp: "An toàn thông tin",
      tinchi: 3,
    },
    {
      id: 8,
      mhp: "093045789574",
      tenhp: "Công nghệ lập trình đa nền tảng cho ứng dụng di động",
      tinchi: 3,
    },
    {
      id: 9,
      mhp: "038594875987",
      tenhp: "Đồ án 2",
      tinchi: 3,
    },
  ];
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="xs:w-screen lg:w-full  overflow-y-auto shadow-lg h-full bg-gray-200">
          <div className="  lg:mx-14 xs:mx-0 my-4">
            <div className="">
              <div className="">
                <div className=" grid grid-rows-2 grid-cols-6 gap-2">
                  <div className="  bg-white rounded row-span-2 xs:col-span-6 lg:col-span-4 shadow-xl pb-2">
                    <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                      {" "}
                      Thông tin sinh viên
                    </h2>
                    <div className=" border-t mt-4 border-gray-100 border-solid"></div>
                    <div className=" grid md:grid-cols-3 xs:grid-cols-4 gap-2 my-8 my-x-4">
                      <div className=" md:ml-4 md:col-span-1 xs:col-start-2 xs:col-span-3   ">
                        <img
                          className=" block object-cover rounded-full w-[120px] h-[120px] "
                          src={avatar}
                        />
                        <Link
                          to="/thong-tin-sinh-vien"
                          className="  text-center ml-4 text-blue-400 text-sm font-normal"
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                      {ApiInforStudent.map((student) => (
                        <div className="md:col-span-1 xs:col-span-2 lg:text-sm xs:ml-2 xs:text-xs">
                          <span className="block text-gray-400 ">
                            MSSV:{" "}
                            <b className=" text-gray-500">{student.msv}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Họ tên:{" "}
                            <b className="text-gray-500">{student.name}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Giới tính:{" "}
                            <b className="text-gray-500">{student.sex}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Ngày sinh:{" "}
                            <b className="text-gray-500">
                              {student.dayofbirth}
                            </b>
                          </span>
                          <span className="block text-gray-400 ">
                            Nơi sinh:{" "}
                            <b className="text-gray-500">{student.nation}</b>
                          </span>
                        </div>
                      ))}
                      {ApiInforStudent.map((student) => (
                        <div className="md:col-span-1 xs:col-span-2 lg:text-sm xs:text-xs">
                          <span className="block text-gray-400 ">
                            Lớp học:{" "}
                            <b className="text-gray-500">{student.class}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Khóa học:{" "}
                            <b className=" text-gray-500">{student.course}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Bậc đào tạo:{" "}
                            <b className=" text-gray-500">{student.train}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Loại hình đào tạo:{" "}
                            <b className=" text-gray-500">{student.type}</b>
                          </span>
                          <span className="block text-gray-400 ">
                            Ngành:{" "}
                            <b className=" text-gray-500">{student.branch}</b>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" bg-white rounded text-sm shadow-lg lg:col-span-2 xs:col-span-6 row-span-1">
                    <p className=" text-gray-500 pt-2 pl-2">
                      {" "}
                      Nhắc nhở mới , chưa xem{" "}
                    </p>
                    <div className="flex items-center mt-6 justify-between px-4">
                      <h1 className=" text-4xl text-gray-500">0</h1>
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
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                    </div>
                    <Link
                      to="/ghi-chu-nhac-nho"
                      className=" text-center ml-4 text-blue-400 text-sm font-normal"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                  <div className=" bg-sky-200 rounded lg:col-span-1 xs:col-span-3 shadow-lg row-span-1">
                    {" "}
                    <p className=" text-blue-500 pt-2 pl-2">
                      {" "}
                      Lịch học trong tuần{" "}
                    </p>
                    <div className="flex cursor-pointer items-center mt-6 justify-between px-4">
                      <h1 className=" text-4xl   text-blue-500">0</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                        />
                      </svg>
                    </div>
                    <Link
                      to="/lich-hoc-theo-tuan"
                      className=" text-center ml-4 text-blue-400 text-sm font-normal"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                  <div className=" bg-amber-100 lg:col-span-1 xs:col-span-3 rounded shadow-lg row-span-1">
                    <p className=" text-amber-500 pt-2 pl-2">
                      {" "}
                      Lịch thi trong tuần{" "}
                    </p>
                    <div className="flex items-center mt-6 justify-between px-4">
                      <h1 className=" text-4xl text-amber-500">0</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-amber-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                    </div>
                    <Link
                      to="/lich-hoc-theo-tuan"
                      className=" text-center ml-4 text-amber-400 text-sm font-normal"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
                <div className=" grid grid-cols-8 gap-2 mt-2">
                  <div
                    onClick={handleLink1}
                    className=" bg-white lg:col-span-1 xs:col-span-4 flex-col flex items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    <p className=" text-gray-400 text-sm"> Đề xuất biểu mẫu </p>
                  </div>
                  <div
                    onClick={handleLink2}
                    className=" bg-white lg:col-span-1 xs:col-span-4  flex-col flex items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm"> Nhắc nhở </p>
                  </div>
                  <div
                    onClick={handleLink3}
                    className=" bg-white flex-col lg:col-span-1 xs:col-span-4 flex items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm"> Kết quả học tập </p>
                  </div>
                  <div
                    onClick={handleLink4}
                    className=" bg-white flex-col lg:col-span-1 xs:col-span-4 flex items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm"> Lịch theo tuần </p>
                  </div>
                  <div
                    onClick={handleLink5}
                    className=" bg-white flex-col flex lg:col-span-1 xs:col-span-4 items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm">
                      {" "}
                      Lịch theo tiến độ{" "}
                    </p>
                  </div>
                  <div
                    onClick={handleLink6}
                    className=" bg-white flex-col flex lg:col-span-1 xs:col-span-4 items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm">Tra cứu công nợ </p>
                  </div>
                  <div
                    onClick={handleLink7}
                    className=" bg-white flex-col flex lg:col-span-1 xs:col-span-4 items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm">
                      Thanh toán trực tuyến
                    </p>
                  </div>
                  <div
                    onClick={handleLink8}
                    className=" bg-white flex-col flex lg:col-span-1 xs:col-span-4 items-center justify-around shadow-lg h-[120px] py-2 cursor-pointer "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 font-semibold text-blue-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>

                    <p className=" text-gray-400 text-sm">
                      {" "}
                      Phiếu thu tổng hợp{" "}
                    </p>
                  </div>
                </div>
                <div className=" grid grid-cols-9 gap-2">
                  <div className=" lg:col-span-4 xs:col-span-9 bg-white  mt-2 shadow-lg ">
                    <div className="flex items-center justify-between py-4">
                      <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                        {" "}
                        Kết quả học tập
                      </h2>
                      <select
                        className="border border-solid border-gray-200 rounded px-4 py-2 mr-4"
                        name="point"
                        id="points"
                      >
                        <option value="2 (2023-2024)">2 (2023-2024)</option>
                        <option value="1 (2023-2024)">1 (2023-2024)</option>
                        <option value="Hockyphu (2023-2024)">
                          Hockyphu (2023-2024)
                        </option>
                        <option value="1 (2024-2025)">1 (2024-2025)</option>
                      </select>
                    </div>
                    <div className=" border border-gray-100 border-solid"></div>
                    <ChartBar />
                  </div>
                  <div className=" lg:col-span-2 xs:col-span-9 bg-white mt-2 shadow-lg ">
                    <h2 className=" text-blue-500 font-bold text-xl pl-3 py-4 pt-4">
                      {" "}
                      Tiến độ học tập
                    </h2>
                    <div className=" border border-gray-100 border-solid"></div>
                    <RadiaChart />
                  </div>
                  <div className=" lg:col-span-3 xs:col-span-9 bg-white mt-2 shadow-lg ">
                    <div className="flex items-center justify-between py-4">
                      <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                        {" "}
                        Lớp học phần
                      </h2>
                      <select
                        className="border border-solid border-gray-200 rounded px-4 py-2 mr-4"
                        name="point"
                        id="points"
                      >
                        <option value="2 (2023-2024)">2 (2023-2024)</option>
                        <option value="1 (2023-2024)">1 (2023-2024)</option>
                        <option value="Hockyphu (2023-2024)">
                          Hockyphu (2023-2024)
                        </option>
                        <option value="1 (2024-2025)">1 (2024-2025)</option>
                      </select>
                    </div>
                    <div className=" border border-gray-100 border-solid"></div>
                    <div className="  lg:col-span-3 xs:col-span-9 overflow-y-auto  h-[350px]">
                      <table className=" table-auto mx-2 mt-4">
                        <thead className="py-20 mb-2">
                          <tr className="  lg:col-span-3 xs:col-span-9 text-left ">
                            <th className=" lg:col-span-2 xs:col-span-6 font-semibold text-xs text-gray-400 ">
                              Môn học/Học phần{" "}
                            </th>
                            <th className=" lg:col-span-1 xs:col-span-3 font-semibold text-sm text-center text-gray-400">
                              Số tín chỉ
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {ApiTopics.map((topic) => (
                            <tr
                              key={topic.id}
                              className=" odd:bg-gray-100 border-t pt-3 border-solid border-gray-300 w-full "
                            >
                              <td className=" mt-4">
                                <p className=" text-blue-400">{topic.mhp}</p>
                                <p className=" font-semibold text-gray-500 text-sm">
                                  {topic.tenhp}
                                </p>
                              </td>
                              <td className="font-semibold text-center text-gray-500 text-sm">
                                {topic.tinchi}
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
          </div>
        </div>
      )}
    </>
  );
};
export default Home;

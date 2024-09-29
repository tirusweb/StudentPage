import React, { useState } from "react";
import avatar from "../../../../image/avatar.png";

const InforStudent = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const ApiInforStudent = [
    {
      id: 1,
      msv: "21103100097",
      name: "Nguyễn Trung Hiếu",
      sex: "Nam",
      status: "Đang học",
      codeCv: "2173HJ238",
      dayin: "19/08/2021",
      class: "ĐHTI15A4HN",
      base: " Hà Nội",
      train: " Đại Học",
      type: " Chính quy",
      department: "Khoa Công nghệ thông tin HN",
      branch: " Công nghệ thông tin",
      specialized: " Công nghệ thông tin",
      course: "2021-2025",
      dayofbirth: "28/11/2003",
      cccd: "03539574398574",
      nation: "Kinh",
      religion: "Không",
      area: " Khu vực 1",
      object: " ",
      joining: " ",
      phonenumber: "0705933950",
      mailuneti: "nthieu.dhti15a4hn@sv.uneti.edu.vn",
      passUneti: " ",
      address: "Xã Đồng Hóa, Huyện Tuyên Hóa, Quảng Bình ",
      place: "Quảng Bình",
      registration: "Tuyên Hóa, Quảng Bình",
      bank: "MB BANK",
      namebank: "NGUYEN TRUNG HIEU",
      role: " ",
      joindang: "  ",
      mail: " ",
      branchbank: " ",
      numberbank: " 0001811152067 ",
    },
  ];

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className=" w-screen  overflow-y-auto shadow-lg h-full bg-gray-200">
          <div className=" lg:mx-14 xs:mx-0  my-4">
            <div className="bg-white rounded">
              <div className="">
                <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                  {" "}
                  Thông tin sinh viên
                </h2>
                <div className=" border-t mt-4  border-gray-100 border-solid"></div>
                {ApiInforStudent.map((student) => (
                  <div
                    key={student.id}
                    className=" pb-8 mt-8 grid grid-cols-6 gap-2"
                  >
                    <div className="lg:col-span-2 xs:col-span-6 ml-6">
                      <img
                        className=" block object-cover rounded-full w-[120px] h-[120px] "
                        src={avatar}
                      />
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        MSSV:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.msv}
                        </b>
                      </p>
                      <p className=" text-gray-400 lg:text-sm xs:text-xs ">
                        Họ tên:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.name}
                        </b>
                      </p>{" "}
                      <p className=" text-gray-400 lg:text-sm xs:text-xs ">
                        Giới tính:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.sex}
                        </b>
                      </p>
                    </div>
                    <div className="lg:col-span-2 lg:ml-0 xs:ml-6 xs:col-span-3">
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Trạng Thái:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.status}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Mã hồ sơ:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.codeCv}
                        </b>
                      </p>{" "}
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs">
                        Lớp học:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.class}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs">
                        Bậc đào tạo:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.train}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xslg:text-sm xs:text-xs">
                        Khoa:{" "}
                        <b className="text-gray-500 lg:text-sm xs:text-xs">
                          {student.department}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs  ">
                        Chuyên ngành:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.branch}
                        </b>
                      </p>
                    </div>
                    <div className="lg:col-span-2 xs:col-span-3">
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngày vào trường:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.course}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Cơ sở:{" "}
                        <b className="text-gray-500 text-sm">{student.base}</b>
                      </p>{" "}
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Loại hình đào tạo:{" "}
                        <b className="text-gray-500 text-sm">{student.type}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngành:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.specialized}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        khóa học:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.course}
                        </b>
                      </p>
                    </div>
                  </div>
                ))}
                <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                  {" "}
                  Thông tin cá nhân
                </h2>
                <div className=" border-t mt-4  border-gray-100 border-solid"></div>
                {ApiInforStudent.map((student) => (
                  <div
                    key={student.id}
                    className=" pb-8 mt-8 grid grid-cols-6 gap- ml-8"
                  >
                    <div className="lg:col-span-3 xs:col-span-6">
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngày sinh:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.dayofbirth}
                        </b>
                      </p>{" "}
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Số CCCD:{" "}
                        <b className="text-gray-500 text-sm">{student.cccd}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngày cấp :{" "}
                        <b className="text-gray-500 text-sm">{student.dayin}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Nơi cấp :{" "}
                        <b className="text-gray-500 text-sm ">
                          {student.place}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngày vào Đoàn :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.joining}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Ngày vào Đảng :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.joindang}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Dân tộc :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.nation}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Diện chính sách :{" "}
                        <b className="text-gray-500 text-sm">{student.role}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Email UNETI :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.mailuneti}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Mật khẩu email UNETI :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.passUneti}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Địa chỉ liên hệ :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.address}
                        </b>
                      </p>
                    </div>
                    <div className="lg:col-span-3 xs:col-span-6">
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Email:{" "}
                        <b className="text-gray-500 text-sm">{student.mail}</b>
                      </p>{" "}
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Điện thoại :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.phonenumber}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Tôn giáo:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.religion}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Đối tượng :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.object}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Hộ khẩu thường trú :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.registration}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Mail :{" "}
                        <b className="text-gray-500 text-sm">{student.mail}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Khu vực:{" "}
                        <b className="text-gray-500 text-sm">{student.area}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Tên ngân hàng :{" "}
                        <b className="text-gray-500 text-sm">{student.bank}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Tên chủ tài khoản :{" "}
                        <b className="text-gray-500 text-sm">{student.bank}</b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Số Tài khoản :{" "}
                        <b className="text-gray-500 text-sm">
                          {student.numberbank}
                        </b>
                      </p>
                      <p className=" text-gray-400 mt-2 lg:text-sm xs:text-xs ">
                        Tên chi nhánh:{" "}
                        <b className="text-gray-500 text-sm">
                          {student.branchbank}
                        </b>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default InforStudent;

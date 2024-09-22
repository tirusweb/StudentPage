import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactAnswers = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isAnswers, setIsAnswers] = useState("");
  const [isInfor, setIsInfor] = useState("");
  const [isDesc, setIsDesc] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFile, setIsFile] = useState(null);
  const [loadings, setLoadings] = useState(true);
  setTimeout(() => {
    setLoadings(false);
  } , 1000);

  const handleBack = () =>{
    navigate("/hop-thu-sinh-vien")
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      isAnswers,
      isInfor,
      isDesc,
      isFile,
    };
    setIsLoading(true);
    console.log(Data);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setIsAnswers("");
      setIsInfor("");
      setIsDesc("");
      setIsFile(null);

      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }, 1000);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {isSuccess && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="bg-white rounded p-4 shadow-lg  border-b-4 border-green-500 animate-borderMove">
            <h2 className="text-green-500 font-bold">Lưu thành công!</h2>
          </div>
        </div>
      )}
      {loadings ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
      <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div className="lg:flex xs:block items-center justify-between mx-4">
              <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                Liên hệ giải đáp thắc mắc
              </h2>
              <div className="flex items-center mt-4 justify-center">
                <button
                  onClick={handleSubmit}
                  className="mr-4 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-normal px-2 py-2 rounded"
                >
                  Lưu
                </button>
                <button onClick={handleBack} className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-normal px-2 py-2 rounded">
                  Trở về
                </button>
              </div>
            </div>
            <div className="border-t mt-4 border-gray-100 border-solid"></div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Mã sinh viên:{" "}
              </p>
              <p className="col-span-4 text-gray-600 text-sm font-bold">
                21103100097
              </p>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Họ và tên:{" "}
              </p>
              <p className="col-span-4 text-gray-600 text-sm font-bold">
                Nguyễn Trung Hiếu
              </p>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Điện thoại:{" "}
              </p>
              <p className="col-span-4 text-gray-600 text-sm font-bold">
                0705933950
              </p>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Chọn loại câu hỏi{" "}
              </p>
              <select
                className="py-2 mr-20 pl-4 border col-span-4 outline-cyan-200 border-solid border-gray-200 rounded "
                name="point"
                id="points"
                value={isAnswers}
                onChange={(e) => setIsAnswers(e.target.value)}
                required
              >
                <option>Chọn</option>
                <option value="Học phí, công nợ">Học phí, công nợ</option>
                <option value="Bảo hiểm y tế">Bảo hiểm y tế</option>
                <option value="Học bổng khuyến khích học tập">
                  Học bổng khuyến khích học tập
                </option>
                <option value="Học bổng hỗ trợ học tập">
                  Học bổng hỗ trợ học tập
                </option>
                <option value="Miễn giảm học phí">Miễn giảm học phí</option>
                <option value="Đổi lịch các lớp học phần">
                  Đổi lịch các lớp học phần
                </option>
                <option value="Đăng ký học lại, đăng ký mới các lớp học phần">
                  Đăng ký học lại, đăng ký mới các lớp học phần
                </option>
                <option value="Hủy đăng ký các lớp học phần">
                  Hủy đăng ký các lớp học phần
                </option>
              </select>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Nội dung cần hỗ trợ{" "}
              </p>
              <select
                className="py-2 mr-20 pl-4 border col-span-4 outline-cyan-300 border-solid border-gray-200 rounded "
                name="point"
                id="points"
                value={isInfor}
                onChange={(e) => setIsInfor(e.target.value)}
                required
              >
                <option>Chọn</option>
                <option value="E muốn hủy học phần Tiếng anh hv">
                  E muốn hủy học phần Tiếng anh hv
                </option>
                <option value="Em muốn hủy học phần do : Đăng ký sai, nhầm, trùng lịch......">
                  Em muốn hủy học phần do : Đăng ký sai, nhầm, trùng lịch ......
                </option>
              </select>
            </div>
            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Diễn giải (nếu có){" "}
              </p>
              <textarea
                value={isDesc}
                onChange={(e) => setIsDesc(e.target.value)}
                className="col-span-4 border mr-20 outline-cyan-200 text-sm font-normal py-2 pl-6"
              ></textarea>
            </div>

            <div className="grid grid-cols-6 mt-10 grid-rows-2">
              <p className=" row-span-2 col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Gửi file:{" "}
              </p>
              <div className="col-span-4 cursor-pointer row-span-2">
                <label
                  className=" row-span-1 cursor-pointer flex text-gray-500 font-normal text-sm"
                  htmlFor="file"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                    />
                  </svg>
                  Đính kèm
                </label>
                <input
                  onChange={(e) => setIsFile(e.target.files[0])}
                  id="file"
                  className="hidden"
                  type="file"
                />
                {isFile && (
                  <div className="row-start-2 w-auto ">
                    <div className="flex items-center mt-2 ">
                      <p className="border border-solid px-2 bg-blue-100 rounded-tl rounded-bl border-gray-200 text-gray-400 text-rm font-normal">
                        {isFile.name}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => setIsFile(null)}
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 py-1 bg-blue-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-6 mt-10">
              <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                Đơn vị/Phòng ban:{" "}
              </p>
              <p className="col-span-4 text-gray-600 text-sm font-bold">
                Phòng Đào tạo HN
              </p>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ContactAnswers;

import React, { useState } from "react";

const ContactForFeedback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswers, setIsAnswers] = useState("");
  const [isInfor, setIsInfor] = useState("");
  const [isTitle, setIsTitle] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loadings, setLoadings] = useState(true);
  setTimeout(() => {
    setLoadings(false);
  }, 1000);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      isAnswers,
      isInfor,
      isTitle,
    };
    setIsLoading(true);
    console.log(Data);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setIsAnswers("");
      setIsInfor("");
      setIsTitle("");

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
            <h2 className="text-green-500 font-bold">Gửi thành công!</h2>
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
                    className="mr-4 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium px-2 py-2 rounded"
                  >
                    Gửi liên hệ góp ý
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
                  Tiêu đề{" "}
                </p>
                <input
                  type="text"
                  placeholder="Nhập tiêu đề"
                  value={isTitle}
                  onChange={(e) => setIsTitle(e.target.value)}
                  className="col-span-4 border mr-20 outline-cyan-200 text-sm font-normal py-2 pl-6"
                />
              </div>
              <div className="grid grid-cols-6 mt-10">
                <p className="col-span-2 lg:ml-20 text-gray-500 text-sm font-normal">
                  Nội dung (nếu có){" "}
                </p>
                <textarea
                  value={isInfor}
                  onChange={(e) => setIsInfor(e.target.value)}
                  placeholder="Nhập nội dung"
                  className="col-span-4 border mr-20 outline-cyan-200 text-sm font-normal py-2 pl-6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForFeedback;

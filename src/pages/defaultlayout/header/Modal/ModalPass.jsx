import React, { useState } from "react";

const ModalPass = ({ onclose }) => {
  const [isPass, setIsPass] = useState("");
  const [isNewPass, setIsNewPass] = useState("");
  const [isRePass, setIsRePass] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFalse, setIsFalse] = useState(false);

  const handlePass = () => {
    const Data = {
      isPass,
      isNewPass,
      isRePass,
    };
    console.log("Data  : ", Data);
    if (isNewPass === isRePass) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onclose();
      }, 2000);
    } else {
      setIsFalse(true);
    }
  };

  return (
    <>
      {isSuccess && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded p-4 shadow-lg  border-b-4 border-green-500 animate-borderMove">
            <h2 className="text-green-500 font-bold">Đổi thành công!</h2>
          </div>
        </div>
      )}
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Đổi Mật Khẩu</h2>
          <input
            value={isPass}
            onChange={(e) => setIsPass(e.target.value)}
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Nhập mật khẩu củ  ..."
          />
          <input
            value={isNewPass}
            onChange={(e) => setIsNewPass(e.target.value)}
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Nhập mật khẩu mới ..."
          />
          <input
            value={isRePass}
            onChange={(e) => setIsRePass(e.target.value)}
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Xác nhận lại mật khẩu ..."
          />
          {isFalse && (
            <p className=" text-red-400 font-normal text-sm ">
              Mật khẩu vừa nhập không giống nhau
            </p>
          )}

          <div className="flex justify-end">
            <button
              onClick={onclose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
            >
              Đóng
            </button>
            <button
              onClick={handlePass}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalPass;

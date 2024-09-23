import React, { useState } from "react";

const ModalPass = ({ onclose }) => {
  const [isPass, setIsPass] = useState("");
  const [isNewPass, setIsNewPass] = useState("");
  const [isRePass, setIsRePass] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePass = () => {
    const correctCurrentPassword = "18082016"; // Replace with your actual password check

    if (isPass !== correctCurrentPassword) {
      setErrorMessage("Mật khẩu cũ không đúng.");
      return;
    }

    if (isNewPass.length < 8) { // Example: New password must be at least 8 characters
      setErrorMessage("Mật khẩu mới phải có ít nhất 8 ký tự.");
      return;
    }

    if (isNewPass !== isRePass) {
      setErrorMessage("Mật khẩu mới và xác nhận không giống nhau.");
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      resetFields();
      onclose();
    }, 2000);
  };

  const resetFields = () => {
    setIsPass("");
    setIsNewPass("");
    setIsRePass("");
    setErrorMessage("");
  };

  return (
    <>
      {isSuccess && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded p-4 shadow-lg border-b-4 border-green-500 animate-borderMove">
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
            placeholder="Nhập mật khẩu củ ..."
            required
          />
          <input
            value={isNewPass}
            onChange={(e) => setIsNewPass(e.target.value)}
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Nhập mật khẩu mới ..."
            required
          />
          <input
            value={isRePass}
            onChange={(e) => setIsRePass(e.target.value)}
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Xác nhận lại mật khẩu ..."
            required
          />
          {errorMessage && (
            <p className="text-red-400 font-normal text-sm">{errorMessage}</p>
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

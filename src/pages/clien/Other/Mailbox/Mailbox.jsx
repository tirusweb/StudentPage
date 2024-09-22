import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mailbox = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  } , 1000);
  const handleSubmit = () => {
    navigate("/lien-he-giai-dap-thac-mac");
  };

  return (
    <>
     {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
      <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div className="lg:flex xs:block items-center justify-between mx-4">
              <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                Hộp thư sinh viên
              </h2>
              <div className="flex items-center mt-4 justify-center">
                <button
                  onClick={handleSubmit}
                  className="mr-4 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-normal px-2 py-2 rounded"
                >
                  Tạo mới
                </button>
              </div>
            </div>
            <div className="border-t mt-4 border-gray-100 border-solid"></div>
            <p className=" mx-2 mt-2 text-gray-500 text-sm font-bold ">
              {" "}
              Không có dữ liệu hiển thị
            </p>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Mailbox;

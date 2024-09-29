import React from "react";
import edu from "../../image/edu.png";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="w-screen flex items-center justify-center h-screen bg-blue-100">
        <div className="lg:w-[80%] lg:h-[80%] xs:w-[100%] xs:h-[100%] my-0 mx-auto bg-cyan-400 shadow-xl rounded">
          <div className="h-full grid grid-cols-5">
            <div className=" lg:block xs:hidden  col-span-3">
              <div className="  flex-col flex items-center justify-center h-full bg-white">
                <h2 className="text-center font-bold text-cyan-500">
                  WELCOME TO TRANG SINH VIÊN UNETI
                </h2>
                <img className="lg:w-[400px] h-auto" src={edu} alt="Edu" />
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-center xs:col-span-5 lg:col-span-2">
              <div className="h-[90%] w-[90%] bg-cyan-600 shadow-xl lg:mx-auto lg:my-0 rounded-xl">
                <h2 className=" lg:hidden xs:block mt-3 text-center font-bold text-cyan-800">
                  WELCOME TO TRANG SINH VIÊN UNETI
                </h2>
                <h2 className=" uppercase text-center mt-20 text-white font-bold">
                  Quên Mật Khẩu
                </h2>
                <p className="text-sm font-bold px-2 text-white mt-4">
                  Sinh viên vui lòng liên hệ với phòng công tác sinh viên qua :
                </p>
                <p className="text-sm font-medium px-2 text-white mt-2">
                  - Email : nguyentrunghieuit03@gmail.com
                </p>
                <p className="text-sm font-medium px-2 text-white mt-2">
                  - SDT : 0123455667
                </p>
                <p className="text-sm font-medium px-2 text-white mt-2">
                  - DC : Phòng HA8.101 - Phòng công tác sinh viên UNETI
                </p>

                <div className="flex-col flex items-center justify-center">
                  <button
                    onClick={handleLink}
                    className=" flex items-center justify-center w-[90%] px-4 py-2 mt-4 bg-cyan-500 text-white font-bold rounded-md hover:text-cyan-500 hover:bg-white"
                  >
                    Về đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;

import React, { useEffect, useState } from "react";
import edu from "../image/edu.png";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin, isAuthenticated }) => {
  const navigate = useNavigate();

  const [isCode, setIsCode] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const toggleButton = () => {
    if (isAuthenticated) {
      return;
    }
    if (isCode === "21103100097" && isPassword === "18082016") {
      console.log("Thành công");
      handleLogin();
    } else {
      alert("Mã sinh viên hoặc mật khẩu không đúng!");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Redirect if already authenticated and trying to access the login page
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-screen flex items-center justify-center h-screen bg-blue-100">
      <div className="w-[80%] h-[80%] my-0 mx-auto bg-cyan-400 shadow-xl rounded">
        <div className="h-full grid grid-cols-5">
          <div className="flex-col flex items-center justify-center col-span-3 h-full bg-white">
            <h2 className="text-center font-bold text-cyan-500">
              WELCOME TO TRANG SINH VIÊN UNETI
            </h2>
            <img className="lg:w-[400px] h-auto" src={edu} alt="Edu" />
          </div>
          <div className="h-full w-full flex items-center justify-center col-span-2">
            <div className="h-[90%] w-[90%] bg-cyan-600 shadow-xl mx-auto my-0 rounded-xl">
              <h2 className="text-center mt-20 text-white font-bold">
                SINH VIÊN ĐĂNG NHẬP
              </h2>

              <div className="flex-col flex items-center justify-center">
                <input
                  type="text"
                  value={isCode}
                  onChange={(e) => setIsCode(e.target.value)}
                  className="w-[90%] px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                  placeholder="Mã sinh viên..."
                />
                <input
                  type="password"
                  value={isPassword}
                  onChange={(e) => setIsPassword(e.target.value)}
                  className="w-[90%] px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                  placeholder="Mật khẩu đăng nhập..."
                />
                <div className="w-[90%] mt-2 flex items-center justify-between">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      className="bg-cyan-400 border-cyan-500"
                      type="checkbox"
                    />
                    <span className="ml-2 text-sm font-medium text-white">
                      Ghi nhớ tôi
                    </span>
                  </label>
                  <a
                    className="text-sm font-medium text-white"
                    href="/quen-mat-khau"
                  >
                    Quên mật khẩu
                  </a>
                </div>

                <button
                  onClick={toggleButton}
                  className="w-[90%] px-4 py-2 mt-4 bg-cyan-500 text-white font-bold rounded-md hover:text-cyan-500 hover:bg-white"
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

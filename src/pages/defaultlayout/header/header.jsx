import React, { useState, useEffect, useRef } from "react";
import avatar from "../../../../src/image/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import ModalPass from "./Modal/ModalPass";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isModalChangePass, setIsModalChangePass] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleHome = () => navigate("/");
  const toggleMenu = () => setIsShow(!isShow);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };
    if (isShow) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShow]);

  const openModal = () => setIsModalChangePass(true);
  const closeModal = () => setIsModalChangePass(false);

  return (
    <>
      <div className=" z-30 containe fixed left-0 right-0">
        <div className="">
          <div className="flex items-start justify-between w-full h-[60px]  bg-white shadow-lg">
            <Link to="/">
              <img
                className="pl-4 h-[50px] w-auto object-cover"
                src="https://media.uneti.edu.vn/Media/2_SVUNETI/FolderFunc/202305/Images/logo-20230202100753-e-20230511035750-e.png"
                alt="Logo Uneti"
              />
            </Link>
            <div className="xs:hidden sm:block">
              <div className=" flex place-self-start  w-[300px] items-center justify-between border-gray-300 border-solid border py-1 mt-3 rounded-xl">
                <input
                  className="  outline-none px-2  "
                  placeholder="Tìm Kiếm..."
                />
                <button className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6  text-gray-500 pr-2 font-semibold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-1 pr-4 fle font-semibold items-center justify-end text-gray-500 mr-4 mt-3">
              <div className=" xs:hidden lg:block">
                <div onClick={handleHome} className="flex mr-4 cursor-pointer  text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Trang chủ
                </div>
              </div>
              <div className=" xs:hidden lg:block">
                <div className="flex mr-4 text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                  Thông báo
                </div>
              </div>
              <div>
                <div
                  onClick={toggleMenu}
                  className="flex items-center cursor-pointer"
                >
                  <img
                    className=" h-[40px] w-[40px] rounded-full mr-1"
                    src={avatar}
                  />
                  <span className=" xs:hidden lg:block text-sm">
                    Nguyễn Trung Hiếu
                  </span>
                </div>
                <div
                  ref={menuRef}
                  className={` ${
                    isShow ? " block" : " hidden"
                  }  bg-white shadow-xl w-auto  fixed top-[64px] rounded right-2`}
                >
                  <ul>
                    <li className="text-gray-500 px-6 py-2 cursor-pointer  hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm">
                      <Link to={"/thong-tin-sinh-vien"}>Thông tin cá nhân</Link>
                    </li>
                    <li
                      onClick={openModal}
                      className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm"
                    >
                      <Link>Đổi mật khẩu</Link>
                    </li>
                    <li className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm">
                      <Link>Đăng xuất</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalChangePass && <ModalPass onclose={closeModal} />}
    </>
  );
};

export default Header;

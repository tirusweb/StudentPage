import React, { useEffect ,useState } from "react";

const TemPlates = () => {

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  } , 1000);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-transparent">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className=" w-screen overflow-y-auto shadow-lg h-full bg-gray-200">
          <div className="lg:mx-14 xs:mx-0 my-4">
            <div className="bg-white rounded pb-10">
              <div className="">
                <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                  Đề xuất biểu mẫu
                </h2>
                <div className="border-t mt-4 border-gray-100 border-solid"></div>
                <div className=" overflow-x-auto w-full">
                  <table className="table-fixed  overflow-x-auto  xs:w-[900px] lg:w-full ">
                    <thead>
                      <tr className="w-full h-10 text-center leading-10 bg-blue-500 text-white font-bold text-sm grid grid-cols-11">
                        <th className="border border-gray-200 col-span-1">
                          STT
                        </th>
                        <th className="border border-gray-200 col-span-7">
                          Tên biểu mẫu Đề xuất
                        </th>
                        <th className="border border-gray-200 col-span-2">
                          Đơn giá (VNĐ)
                        </th>
                        <th className="border border-gray-200 col-span-1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="h-8 grid grid-cols-11">
                        <td className="border border-gray-200 px-2 text-center col-span-1">
                          1
                        </td>
                        <td className="border border-gray-200 px-2 col-span-7 text-left">
                          Test
                        </td>
                        <td className="border border-gray-200 px-2 col-span-2 text-right">
                          0
                        </td>
                        <td className="border border-gray-200 px-2 text-center col-span-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-center text-gray-500 font-bold cursor-pointer hover:text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TemPlates;

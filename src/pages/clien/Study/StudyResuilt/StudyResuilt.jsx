import React from "react";

const StudyResuit = () => {
  return (
    <>
      <div className="  w-screen  overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className=" lg:mx-14 xs:mx-0  my-4">
          <div className="bg-white rounded pb-10">
            <div className="">
              <h2 className=" text-blue-500 font-bold text-xl pl-3 pt-2">
                {" "}
                Kết quả học tập
              </h2>
              <div className=" border-t mt-4  border-gray-100 border-solid"></div>
              <div className="">
                {/* <table className=" table-auto">
                    <thead>
                        <tr className=" grid grid-flow-col grid-rows-3">
                            <th className=" row-span-3">STT</th>
                            <th className=" row-span-3">Mã lớp học phần</th>
                            <th className=" row-span-3">Tên môn học / học phần</th>
                            <th className=" row-span-3">Số tín chỉ</th>
                            <th className=" row-span-3">Chuyên cần</th>
                            <th className=" row-span-1">Thường xuyên</th>
                            <th className=" row-span-2">1</th>
                            <th className=" row-span-2">2</th>
                            
                        </tr>
                    </thead>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyResuit;

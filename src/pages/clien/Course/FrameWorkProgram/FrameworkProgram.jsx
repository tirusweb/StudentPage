import React, { useState } from "react";
import { Link } from "react-router-dom";

const FramworkProgram = () => {
  const [isShow, setIsShow] = useState(null);

  const handleToggle = (id) => {
    if (isShow === id) {
      setIsShow(null);
    } else {
      setIsShow(id);
    }
  };

  const FakeApi = [
    {
      id: 1,
      semester: "Học kỳ 1",
      total: 15,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Tin cơ sở ",
          code: "0101000197",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 2,
          name: "Logic học ",
          code: "0101000584",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 3,
          name: "Giáo dục thể chất 1",
          code: "0101000718",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 4,
          name: "Tin học văn phòng",
          code: "0101000718",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 5,
          name: "Đại số tuyến tính",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 6,
          name: "Xác suất thống kê",
          code: "0101001053",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 7,
          name: "Xử lý tín hiệu số",
          code: "0101001890",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 2,
      semester: "Học kỳ 2",
      total: 21,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Pháp luật đại cương ",
          code: "0101000585",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 2,
          name: "Vật lý ",
          code: "0101000584",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 3,
          name: "Toán giải tích",
          code: "0101001103",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 4,
          name: "Thực tập lập trình cơ bản",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source: "",
        },
        {
          stt: 5,
          name: "Triết học Mac - Lênin",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 6,
          name: "	Phương pháp tính",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 7,
          name: "Tiếng Anh 1",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 3,
      semester: "Học kỳ 3",
      total: 19,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Toán rời rạc ",
          code: "0101000585",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuOr4ceYg-tq7ol_bEEvvj-qAHOHQhMxETUI8dohAJRFtS7tqdxYOwmIqfqD54bxmDkO8mYQgKqQ6A7rJHfRtDnf",
        },
        {
          stt: 2,
          name: "Giáo dục thể chất 2 * ",
          code: "0101000584",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZmfAp-FjGROZba8x36ex2lyuynvbcJmibKptFFKr6M65qa6-25F6A7VuYJ-ZIszpwPxaN6hPQka3aFUmpZ8lLQt",
        },
        {
          stt: 3,
          name: "Lập trình hướng đối tượng",
          code: "0101001078",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_jgY9N8q2tjohoRtbFHHFu1HW-76P88Bs-ogPcqOF5CyLU3IhLBY1b31aJ59PrGACaKOMpm6aa0CpJOiinl1htQGMhVBAjJpdss4FTu4N1r1jxv476RyoLa54jp3IVawEg",
        },
        {
          stt: 4,
          name: "	Kiến trúc máy tính",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNO19N-2p4A3JfeUW-5ej9jda09K8lWue4dynAQGvOCB9NEzdwaVHTEbIamm3_2oqZZRfZWwEp-6dqI0eaie-4D",
        },
        {
          stt: 5,
          name: "Cấu trúc dữ liệu và giải thuật",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuP72XKwB_UwLTUOTeZXxv0XkNugzmGpvgj8_ABD-giWNJ3amOmy12KpaIJdDu3_c4fvBqloQgzvNxNdgOOdCUKq",
        },
        {
          stt: 6,
          name: "Kinh tế chính trị Mac - Lê Nin",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_m72ZInwygEElC75XT2f-Rz5tYMTDyS1IpzSc6CCVMyFHF8c4cJMJiwzwhfF9V8SYVzPqS7LUMkyqfyr2jVqZBwS0i9W_XVCmBVEpNJg3ZictiR7GVA1o692uLl9W1HuQg",
        },
        {
          stt: 7,
          name: "Tiếng Anh 2",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZlXpaKX2nzj_r2ooN_4wxngj4nK99nuDSgQIaGDf-Sv3_fo4cKSIoEeQ0_8g3Zr9xzcFKCrcFUvGIQFeje_oMvi",
        },
        {
          stt: 8,
          name: "	Kỹ năng nhận thức bản thân",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2Zn8_uNti_w1dNhGU4Fh8L12qOZf9wAK4VyTb9czpqG9DHrZ7fBaEVANGv0a7FqM5L2IHs81TahP0jS7KPm6urdsq1H59Y1ozLf-Lm6mHvrNHQ",
        },
        {
          stt: 9,
          name: "	Giáo dục quốc phòng - HP1 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 10,
          name: "Giáo dục quốc phòng - HP2 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP3 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP4 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 4,
      semester: "Học kỳ 4",
      total: 19,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Cơ sở dữ liệu ",
          code: "0101000585",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNT0dqsQhWfYZrE8X6xGDyFcgfVxMB--gYXabIeZgUY43J1N6VdIJ1w8mXJSDfJstvk7aYRQfhYE_hDGxg8S2MI",
        },
        {
          stt: 2,
          name: "Quản lý dự án công nghệ thông tin ",
          code: "0101000584",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNlxb7tiQuIvt5fS-Yf6h483iK8FKmeKwB05h366LAWhkRuErhdMI-x1v39kHWR1tBfdJGxXFmXn5_cYtkA5ccL",
        },
        {
          stt: 3,
          name: "Giáo dục thể chất 3",
          code: "0101001078",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_jgY9N8q2tjohoRtbFHHFu1HW-76P88Bs-ogPcqOF5CyLU3IhLBY1b31aJ59PrGACaKOMpm6aa0CpJOiinl1htQGMhVBAjJpdss4FTu4N1r1jxv476RyoLa54jp3IVawEg",
        },
        {
          stt: 4,
          name: "	Kiến trúc máy tính",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNO19N-2p4A3JfeUW-5ej9jda09K8lWue4dynAQGvOCB9NEzdwaVHTEbIamm3_2oqZZRfZWwEp-6dqI0eaie-4D",
        },
        {
          stt: 5,
          name: "Cấu trúc dữ liệu và giải thuật",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuP72XKwB_UwLTUOTeZXxv0XkNugzmGpvgj8_ABD-giWNJ3amOmy12KpaIJdDu3_c4fvBqloQgzvNxNdgOOdCUKq",
        },
        {
          stt: 6,
          name: "Kinh tế chính trị Mac - Lê Nin",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_m72ZInwygEElC75XT2f-Rz5tYMTDyS1IpzSc6CCVMyFHF8c4cJMJiwzwhfF9V8SYVzPqS7LUMkyqfyr2jVqZBwS0i9W_XVCmBVEpNJg3ZictiR7GVA1o692uLl9W1HuQg",
        },
        {
          stt: 7,
          name: "Tiếng Anh 2",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZlXpaKX2nzj_r2ooN_4wxngj4nK99nuDSgQIaGDf-Sv3_fo4cKSIoEeQ0_8g3Zr9xzcFKCrcFUvGIQFeje_oMvi",
        },
        {
          stt: 8,
          name: "	Kỹ năng nhận thức bản thân",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2Zn8_uNti_w1dNhGU4Fh8L12qOZf9wAK4VyTb9czpqG9DHrZ7fBaEVANGv0a7FqM5L2IHs81TahP0jS7KPm6urdsq1H59Y1ozLf-Lm6mHvrNHQ",
        },
        {
          stt: 9,
          name: "	Giáo dục quốc phòng - HP1 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 10,
          name: "Giáo dục quốc phòng - HP2 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP3 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP4 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 5,
      semester: "Học kỳ 5",
      total: 20,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Cơ sở dữ liệu ",
          code: "0101000585",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNT0dqsQhWfYZrE8X6xGDyFcgfVxMB--gYXabIeZgUY43J1N6VdIJ1w8mXJSDfJstvk7aYRQfhYE_hDGxg8S2MI",
        },
        {
          stt: 2,
          name: "Quản lý dự án công nghệ thông tin ",
          code: "0101000584",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNlxb7tiQuIvt5fS-Yf6h483iK8FKmeKwB05h366LAWhkRuErhdMI-x1v39kHWR1tBfdJGxXFmXn5_cYtkA5ccL",
        },
        {
          stt: 3,
          name: "Giáo dục thể chất 3",
          code: "0101001078",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_jgY9N8q2tjohoRtbFHHFu1HW-76P88Bs-ogPcqOF5CyLU3IhLBY1b31aJ59PrGACaKOMpm6aa0CpJOiinl1htQGMhVBAjJpdss4FTu4N1r1jxv476RyoLa54jp3IVawEg",
        },
        {
          stt: 4,
          name: "	Kiến trúc máy tính",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNO19N-2p4A3JfeUW-5ej9jda09K8lWue4dynAQGvOCB9NEzdwaVHTEbIamm3_2oqZZRfZWwEp-6dqI0eaie-4D",
        },
        {
          stt: 5,
          name: "Cấu trúc dữ liệu và giải thuật",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuP72XKwB_UwLTUOTeZXxv0XkNugzmGpvgj8_ABD-giWNJ3amOmy12KpaIJdDu3_c4fvBqloQgzvNxNdgOOdCUKq",
        },
        {
          stt: 6,
          name: "Kinh tế chính trị Mac - Lê Nin",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_m72ZInwygEElC75XT2f-Rz5tYMTDyS1IpzSc6CCVMyFHF8c4cJMJiwzwhfF9V8SYVzPqS7LUMkyqfyr2jVqZBwS0i9W_XVCmBVEpNJg3ZictiR7GVA1o692uLl9W1HuQg",
        },
        {
          stt: 7,
          name: "Tiếng Anh 2",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZlXpaKX2nzj_r2ooN_4wxngj4nK99nuDSgQIaGDf-Sv3_fo4cKSIoEeQ0_8g3Zr9xzcFKCrcFUvGIQFeje_oMvi",
        },
        {
          stt: 8,
          name: "	Kỹ năng nhận thức bản thân",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2Zn8_uNti_w1dNhGU4Fh8L12qOZf9wAK4VyTb9czpqG9DHrZ7fBaEVANGv0a7FqM5L2IHs81TahP0jS7KPm6urdsq1H59Y1ozLf-Lm6mHvrNHQ",
        },
        {
          stt: 9,
          name: "	Giáo dục quốc phòng - HP1 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 10,
          name: "Giáo dục quốc phòng - HP2 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP3 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP4 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 6,
      semester: "Học kỳ 6",
      total: 28,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Cơ sở dữ liệu ",
          code: "0101000585",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNT0dqsQhWfYZrE8X6xGDyFcgfVxMB--gYXabIeZgUY43J1N6VdIJ1w8mXJSDfJstvk7aYRQfhYE_hDGxg8S2MI",
        },
        {
          stt: 2,
          name: "Quản lý dự án công nghệ thông tin ",
          code: "0101000584",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNlxb7tiQuIvt5fS-Yf6h483iK8FKmeKwB05h366LAWhkRuErhdMI-x1v39kHWR1tBfdJGxXFmXn5_cYtkA5ccL",
        },
        {
          stt: 3,
          name: "Giáo dục thể chất 3",
          code: "0101001078",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_jgY9N8q2tjohoRtbFHHFu1HW-76P88Bs-ogPcqOF5CyLU3IhLBY1b31aJ59PrGACaKOMpm6aa0CpJOiinl1htQGMhVBAjJpdss4FTu4N1r1jxv476RyoLa54jp3IVawEg",
        },
        {
          stt: 4,
          name: "	Kiến trúc máy tính",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNO19N-2p4A3JfeUW-5ej9jda09K8lWue4dynAQGvOCB9NEzdwaVHTEbIamm3_2oqZZRfZWwEp-6dqI0eaie-4D",
        },
        {
          stt: 5,
          name: "Cấu trúc dữ liệu và giải thuật",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuP72XKwB_UwLTUOTeZXxv0XkNugzmGpvgj8_ABD-giWNJ3amOmy12KpaIJdDu3_c4fvBqloQgzvNxNdgOOdCUKq",
        },
        {
          stt: 6,
          name: "Kinh tế chính trị Mac - Lê Nin",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_m72ZInwygEElC75XT2f-Rz5tYMTDyS1IpzSc6CCVMyFHF8c4cJMJiwzwhfF9V8SYVzPqS7LUMkyqfyr2jVqZBwS0i9W_XVCmBVEpNJg3ZictiR7GVA1o692uLl9W1HuQg",
        },
        {
          stt: 7,
          name: "Tiếng Anh 2",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZlXpaKX2nzj_r2ooN_4wxngj4nK99nuDSgQIaGDf-Sv3_fo4cKSIoEeQ0_8g3Zr9xzcFKCrcFUvGIQFeje_oMvi",
        },
        {
          stt: 8,
          name: "	Kỹ năng nhận thức bản thân",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2Zn8_uNti_w1dNhGU4Fh8L12qOZf9wAK4VyTb9czpqG9DHrZ7fBaEVANGv0a7FqM5L2IHs81TahP0jS7KPm6urdsq1H59Y1ozLf-Lm6mHvrNHQ",
        },
        {
          stt: 9,
          name: "	Giáo dục quốc phòng - HP1 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 10,
          name: "Giáo dục quốc phòng - HP2 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP3 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP4 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
    {
      id: 7,
      semester: "Học kỳ 7",
      total: 17,
      permision: "Học phần bắt buộc",
      data: [
        {
          stt: 1,
          name: "Cơ sở dữ liệu ",
          code: "0101000585",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNT0dqsQhWfYZrE8X6xGDyFcgfVxMB--gYXabIeZgUY43J1N6VdIJ1w8mXJSDfJstvk7aYRQfhYE_hDGxg8S2MI",
        },
        {
          stt: 2,
          name: "Quản lý dự án công nghệ thông tin ",
          code: "0101000584",
          tc: 1,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNlxb7tiQuIvt5fS-Yf6h483iK8FKmeKwB05h366LAWhkRuErhdMI-x1v39kHWR1tBfdJGxXFmXn5_cYtkA5ccL",
        },
        {
          stt: 3,
          name: "Giáo dục thể chất 3",
          code: "0101001078",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_jgY9N8q2tjohoRtbFHHFu1HW-76P88Bs-ogPcqOF5CyLU3IhLBY1b31aJ59PrGACaKOMpm6aa0CpJOiinl1htQGMhVBAjJpdss4FTu4N1r1jxv476RyoLa54jp3IVawEg",
        },
        {
          stt: 4,
          name: "	Kiến trúc máy tính",
          code: "0101000718",
          tc: 3,
          section: 0,
          practive: 90,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuNO19N-2p4A3JfeUW-5ej9jda09K8lWue4dynAQGvOCB9NEzdwaVHTEbIamm3_2oqZZRfZWwEp-6dqI0eaie-4D",
        },
        {
          stt: 5,
          name: "Cấu trúc dữ liệu và giải thuật",
          code: "0101001535",
          tc: 3,
          section: 45,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_rOvL77yr8LwbCzPnvZsBuP72XKwB_UwLTUOTeZXxv0XkNugzmGpvgj8_ABD-giWNJ3amOmy12KpaIJdDu3_c4fvBqloQgzvNxNdgOOdCUKq",
        },
        {
          stt: 6,
          name: "Kinh tế chính trị Mac - Lê Nin",
          code: "0101001053",
          tc: 2,
          section: 30,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_m72ZInwygEElC75XT2f-Rz5tYMTDyS1IpzSc6CCVMyFHF8c4cJMJiwzwhfF9V8SYVzPqS7LUMkyqfyr2jVqZBwS0i9W_XVCmBVEpNJg3ZictiR7GVA1o692uLl9W1HuQg",
        },
        {
          stt: 7,
          name: "Tiếng Anh 2",
          code: "0101001942",
          tc: 4,
          section: 60,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2ZlXpaKX2nzj_r2ooN_4wxngj4nK99nuDSgQIaGDf-Sv3_fo4cKSIoEeQ0_8g3Zr9xzcFKCrcFUvGIQFeje_oMvi",
        },
        {
          stt: 8,
          name: "	Kỹ năng nhận thức bản thân",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source:
            "https://media.uneti.edu.vn//viewer.html?k=O8quJ9NOzQOEzs6cQDKk_tC07CctoPDz4frSxzHc2Zn8_uNti_w1dNhGU4Fh8L12qOZf9wAK4VyTb9czpqG9DHrZ7fBaEVANGv0a7FqM5L2IHs81TahP0jS7KPm6urdsq1H59Y1ozLf-Lm6mHvrNHQ",
        },
        {
          stt: 9,
          name: "	Giáo dục quốc phòng - HP1 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 10,
          name: "Giáo dục quốc phòng - HP2 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP3 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
        {
          stt: 11,
          name: "	Giáo dục quốc phòng - HP4 ",
          code: "0101001942",
          tc: 1,
          section: 15,
          practive: 0,
          team: 0,
          source: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="container w-screen overflow-y-auto lg:overflow-x-hidden xs:overflow-x-auto shadow-lg h-full bg-gray-200">
        <div className="lg:mx-14 xs:mx-0 my-4">
          <div className="bg-white rounded pb-10">
            <div>
              <h2 className="text-blue-500 font-bold text-xl pl-3 pt-2">
                Chương trình khung
              </h2>
              <div className="border-t mt-4 border-gray-100 border-solid"></div>
              <table className="border border-gray-200 table-auto w-full">
                <thead>
                  <tr className="py-8 bg-cyan-500">
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      STT
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Tên môn học/Học phần
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Mã Học phần
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Học phần
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Số TC
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Số tiết LT
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Nhóm tự chọn
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Số TC bắt buộc của nhóm
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Đạt
                    </th>
                    <th className="text-center border-r border-white border-solid px-3 py-2 text-white tracking-wider">
                      Đề cương môn học
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FakeApi.map((infor) => (
                    <React.Fragment key={infor.id}>
                      <tr
                        onClick={() => handleToggle(infor.id)}
                        className="cursor-pointer bg-gray-100 hover:bg-gray-200"
                      >
                        <td
                          colSpan="4"
                          className="py-3 pl-2 font-bold text-red-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {infor.semester}
                        </td>
                        <td
                          colSpan="1"
                          className="py-3 pl-2 font-bold text-red-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {infor.total}
                        </td>
                        <td
                          colSpan="6"
                          className="py-3 pl-2 font-bold text-red-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-left"
                        ></td>
                      </tr>
                      {isShow === infor.id &&
                        infor.data.map((item) => (
                          <tr key={item.stt}>
                            <td className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.stt}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.name}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.code}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.tc}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.section}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.practive}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              {item.team}
                            </td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500"></td>
                            <td className="border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 font-bold text-green-500 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                />
                              </svg>
                            </td>
                            {item.source === "" ? (
                              <td
                                className={`border text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500`}
                              ></td>
                            ) : (
                              <td
                                className={`border hover:text-cyan-500 text-center font-semibold lg:text-sm xs:text-xs px-3 py-2 text-gray-500`}
                              >
                                <a href={item.source} className="">
                                  Xem
                                </a>
                              </td>
                            )}
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
                  <tr>
                    <td
                      colSpan={4}
                      className="border text-left font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      Tổng TC yêu cầu
                    </td>
                    <td
                      colSpan={1}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      139
                    </td>
                    <td
                      colSpan={5}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    ></td>
                  </tr>
                  <tr>
                    <td
                      colSpan={4}
                      className="border text-left font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      Tổng TC bắt buộc
                    </td>
                    <td
                      colSpan={1}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      128
                    </td>
                    <td
                      colSpan={5}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    ></td>
                  </tr>
                  <tr>
                    <td
                      colSpan={4}
                      className="border text-left font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      Tổng TC tự chọn
                    </td>
                    <td
                      colSpan={1}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    >
                      11
                    </td>
                    <td
                      colSpan={5}
                      className="border text-center font-bold lg:text-sm xs:text-xs px-3 py-2 text-red-500"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FramworkProgram;

import React from "react";
import ReactApexChart from "react-apexcharts";

const CustomChart = () => {
  const chartOptions = {
    series: [
      {
        name: "Điểm của bạn",
        type: "bar",
        data: [6.5, 7.8, 8.5, 7.8, 9.6, 9.4, 8.7, 7.4, 8.1],
      },
      {
        name: "Điểm TB lớp học phần",
        type: "line",
        data: [7.8, 7.8, 8.5, 7.8, 9.6, 9.4, 8.7, 7.4, 8.1],
      },
    ],
    chart: {
      height: 350,
      type: "line",
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: [0], // Enable data labels for the line chart (series index 1)
    },
    xaxis: {
      categories: [
        "An toàn thông tin",
        "Công nghệ java",
        "công nghệ lập trình đa nền tảng cho ứng dụng di động",
        "Công nghệ phần mềm",
        "Đồ án 2",
        "Lập trình .NET",
        "Thực hành lập trình mạng",
        "Thực hành quản trị mạng",
        "Trí tuệ nhân tạo",
      ],
      labels: {
        show: false, // Ẩn hoàn toàn nhãn trục X
      },
    },
    yaxis: [
      {
        title: {
          text: "Điểm TB lớp học phần",
          style: {
            color: "#6B5B95", // Purple axis label
          },
        },
      },
      {
        opposite: true,
        title: {
          text: "Điểm của bạn",
          style: {
            color: "#FF4500", // Orange axis label
          },
        },
      },
    ],
    colors: ["#FF5733", "#F5B041"], // Custom colors for bar and line
    legend: {
      position: "bottom",
      labels: {
        colors: ["#FF5733", "#F5B041"], // Matching legend colors
      },
      markers: {
        fillColors: ["#FF5733", "#F5B041"],
      },
      fontSize: "14px",
      fontFamily: "Arial",
    },
    grid: {
      show: true,
      borderColor: "#ccc",
    },
    tooltip: {
      theme: "light",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default CustomChart;

import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const RadiaChart = () => {
  // State cho dữ liệu biểu đồ
  const [seriesData, setSeriesData] = useState([100, 86]); 
  const [labelsData, setLabelsData] = useState(["Tổng : 151 tín chỉ", "Đã học : 131 tín chỉ"]);

  // Thêm kiểm tra kỹ trước khi truyền vào chart
  const validSeries = seriesData.filter((val) => val !== undefined && val !== null);
  const validLabels = labelsData.filter((label) => label !== undefined && label !== null);

  const chartOptions = {
    series: validSeries.length > 0 ? validSeries : [0], // Giá trị mặc định nếu dữ liệu trống
    chart: {
      height: 350,
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB",
        },
        dataLabels: {
          enabled: true,
        },
        hollow: {
          margin: 0,
          size: "32%", // Đảm bảo size hợp lệ
        },
      },
    },
    labels: validLabels.length > 0 ? validLabels : ["No data"], // Giá trị mặc định nếu nhãn trống
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      theme: "light",
      enabled: true,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  useEffect(() => {
    console.log("Series Data:", validSeries);
    console.log("Labels Data:", validLabels);
    
    // Giả sử có một API gọi hoặc dữ liệu được cập nhật sau một khoảng thời gian
    // Kiểm tra dữ liệu trước khi cập nhật
    setTimeout(() => {
      // Thay đổi dữ liệu hoặc giữ nguyên nếu không cần thay đổi
      const newSeriesData = [100, 90]; // Ví dụ cập nhật lại series
      const newLabelsData = ["Tổng : 151 tín chỉ", "Đã học : 141 tín chỉ"]; // Cập nhật labels

      // Kiểm tra xem dữ liệu có hợp lệ không trước khi setState
      if (newSeriesData.every((val) => typeof val !== "undefined") && 
          newLabelsData.every((label) => typeof label !== "undefined")) {
        setSeriesData(newSeriesData);
        setLabelsData(newLabelsData);
      } else {
        console.error("Dữ liệu mới có giá trị undefined");
      }
    }, 5000); // Giả sử dữ liệu thay đổi sau 5 giây
  }, [validSeries, validLabels]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={validSeries}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadiaChart;

import Chart from "react-apexcharts";

import { useState } from "react";

const Chart1 = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ],
    options: {
      chart: {
        height: 350,
        stacked: true,
        type: "line",
        },
      theme: {
        mode: 'light', 
        palette: 'palette3', 
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65
        },
    },

      plotOptions: {
        bar: {
          columnWidth: "80%",
        },
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: "Traffic Sources",
      },
      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      labels: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001",
      ],
      xaxis: {
        type: "datetime",
      },

      yaxis: [
        {
          title: {
            text: "Amount in USD",
          },
        },

        {
          opposite: true,
          title: {
            text: "% Growth",
          },
        },
      ],
    },
  });

  return (
    <div className="bg-pink-50 justify-between">
      <h1 className="text-3xl text-center m-4 bg-purple-300 p-2 font-bold rounded-xl shadow-lg">
        Chart 1 - Line with Bar
      </h1>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="1000"
      />
    </div>
  );
};

export default Chart1;

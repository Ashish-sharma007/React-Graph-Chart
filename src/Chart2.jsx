import React, { useState } from "react";
import Chart from "react-apexcharts";

const StakeChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [1, 2, 1, 4, 5, 2, 2, 1],

        color: "#3163E9",
      },
      {
        name: "PRODUCT B",
        data: [1, 1, 2, 12, 20, 27, 33, 74],
        color: "#F3CD42",
      },
      {
        name: "PRODUCT C",
        data: [0, 0, 0, 0, 0, 0, 1, 2],
        color: "#FF0000",
      },
      {
        name: "PRODUCT D",

        data: [11, 17, 6, 3, 2, 3, 1, 1],
        color: "#42E08A",
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "80%",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "Nov 2005 ",
          "Nov 2006",
          "Nov 2007",
          "Nov 2008",
          "Nov 2009",
          "Nov 2010",
          "Nov 2011",
          "Nov 2012",
          "Nov 2013",
          "Nov 2014",
          "Nov 2011",
          "Nov 2012",
          "Nov 2013",
          "Nov 2014",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
      },
    },
  });

  return (
    <div id="chart">
    <h1 className="text-3xl text-center m-4 bg-purple-300 p-2 font-bold rounded-xl shadow-lg">
        Chart 2 - Stacked Bar
      </h1>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default StakeChart;

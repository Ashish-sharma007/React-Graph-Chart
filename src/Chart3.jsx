import React, { useState } from "react";
import Chart from "react-apexcharts";

const Chart3 = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [1, 2, 1, 4, -5, 2, 2, 1, 7, -1, -6, -12],

        color: "#4F9BCC",
      },
      {
        name: "PRODUCT B",
        data: [-3, 1, 2, 12, -20, 27, 33, 74, -12, -2, 4, 4],
        color: "#9F8831",
      },
      {
        name: "PRODUCT C",
        data: [0, 0, 0, 0, 0, 0, 1, 2, 0, -2, 10, -5],
        color: "#A3286E",
      },
      {
        name: "PRODUCT D",

        data: [11, 17, 6, 3, -2, -8, 1, 1, -4, 4, -9, -3],
        color: "#00978B",
      },
    ],

    options: {
      chart: {
        type: "bar",
        stacked: true,
        height: 350,
      },
      plotOptions: {
        bar: {
          columnWidth: "100%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: "Growth",
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) + "";
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2011-01-01",
          "2011-02-01",
          "2011-03-01",
          "2011-04-01",
          "2011-05-01",
          "2011-06-01",
          "2011-07-01",
          "2011-08-01",
          "2011-09-01",
          "2011-10-01",
          "2011-11-01",
          "2011-12-01",
          "2012-01-01",
          "2013-01-01",
        ],
        labels: {
          rotate: -90,
        },
      },
    },
  });

  return (
    <div id="chart">
    <h1 className="text-3xl text-center m-4 bg-purple-300 p-2 font-bold rounded-xl shadow-lg">
        Chart 3 - Stacked Bar with Negative Values
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

export default Chart3;

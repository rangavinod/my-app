import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const datapointvalue = props.datapoint.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...datapointvalue);
  return (
    <div className="chart">
      {props.datapoint.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

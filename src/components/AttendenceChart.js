import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);


function AttendenceChart({ chartData }) {
    return (
        <div className="chart-container" style={{ height: "500px", width: "500px", position: "absolute", left: "500px" }}>
            <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
            <Pie
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016 - 2020"
                        }
                    }
                }}
                />
        </div>
    );
}

export default AttendenceChart;


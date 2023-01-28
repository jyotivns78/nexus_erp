import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, registerables } from "chart.js";
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(...registerables);

export const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container" style={{ height: "500px", width: "500px", position: "absolute", left: "500px", top: "700px" }}>
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Users Gained between 2016-2022"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

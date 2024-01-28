"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement);

export type ComparisonDisplayProps = {
    label: string;
    proportion: number;
}
export default function ComparisonDisplay({ label, proportion }: ComparisonDisplayProps) {
    return <div>
        <Doughnut data={{
            labels: [
                "label",
                ""
            ],
            datasets: [{
                label: "Cleaner Than",
                data: [proportion , 1 - proportion],
                backgroundColor: [
                    "oklch(76.76% 0.184 183.61)",
                    "transparent"
                ],
                borderWidth: 0,
                hoverOffset: 5
            }]
        }}/>
    </div>
}
import React from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    { time: '13:00', attendance: 50 },
    { time: '14:00', attendance: 56 },
    { time: '15:00', attendance: 67 },
    { time: '16:00', attendance: 71 },
    { time: '17:00', attendance: 190 },
    { time: '18:00', attendance: 243 },
    { time: '19:00', attendance: 421 },
    { time: '20:00', attendance: 163 },
    { time: '21:00', attendance: 87 }
]

const AttendanceFlowGraphic = () => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={data} width={500} height={400}
                margin={
                    {
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }
                }
            >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="attendance" fill="#4472C4" stroke="#4472C4" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default AttendanceFlowGraphic
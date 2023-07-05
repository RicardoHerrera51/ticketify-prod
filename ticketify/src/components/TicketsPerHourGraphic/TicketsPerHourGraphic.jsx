import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    { time: '13:00', tickets: 26 },
    { time: '14:00', tickets: 48 },
    { time: '15:00', tickets: 93 },
    { time: '16:00', tickets: 176 },
    { time: '17:00', tickets: 216 },
    { time: '18:00', tickets: 243 },
    { time: '19:00', tickets: 421 },
    { time: '20:00', tickets: 163 },
    { time: '21:00', tickets: 57 }
]


const TicketsPerHourGraphic = () => {
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
            <Line dataKey="tickets" stroke="#ED7D31"  fill='#ED7D31' strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default TicketsPerHourGraphic
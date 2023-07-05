import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    { name: "Asistieron", value: 1127 },
    { name: "No asistieron", value: 308 }
]

const colors = ['#66A83A', '#EE9733']

const AttendanceGraphic = () => {
    return (
        <div className='w-full h-64'>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceGraphic
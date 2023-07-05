import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    { name: "Vendidos", value: 1200 },
    { name: "No vendidos", value: 235 }
]

const colors = ['#3D6FC9', '#A7A7A7']

const TicketsStatsGraphic = () => {
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

export default TicketsStatsGraphic
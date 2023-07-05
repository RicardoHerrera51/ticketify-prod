import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
    { name: "En grupo", value: 938 },
    { name: "Individual", value: 497 }
]

const colors = ['#F57B28', '#F5C000']

const EntryTypeGraphic = () => {
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

export default EntryTypeGraphic
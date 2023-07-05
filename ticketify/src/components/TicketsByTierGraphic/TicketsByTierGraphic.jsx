import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    { tier: 'General', tickets: 843 },
    { tier: 'Preferencial', tickets: 642 },
    { tier: 'Sombra', tickets: 751 },
    { tier: 'Platea', tickets: 764 },
    { tier: 'VIP', tickets: 452 },
    { tier: 'Platinum', tickets: 460 },
    { tier: 'Ultra Platinum', tickets: 268 },
    { tier: 'Palco', tickets: 163 }
]

const TicketsByTierGraphic = () => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data} width={500} height={400}
                margin={
                    {
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }
                }>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="tier" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tickets" fill='#70AD47' barSize={60}/>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TicketsByTierGraphic
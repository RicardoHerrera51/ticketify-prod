const data = [
    { id: 1, orderNumber: "000001", user: "Federico Ramírez", event: "Motomami World Tour", purchaseDate: "24/04/2023", total: "75.00" },
    { id: 2, orderNumber: "000002", user: "María José Campos", event: "Feid En Concierto", purchaseDate: "24/04/2023", total: "115.00" },
    { id: 3, orderNumber: "000003", user: "Alonso Rivera", event: "Festival de cine francés", purchaseDate: "24/04/2023", total: "25.00" },
    { id: 4, orderNumber: "000004", user: "Ricardo Ponce", event: "El Salvador vs EEUU", purchaseDate: "24/04/2023", total: "60.00" },
    { id: 5, orderNumber: "000005", user: "María José Campos", event: "Bad Bunny World Hottest Tour", purchaseDate: "24/04/2023", total: "110.00" },
]


const OrderAdminCard = () => {
    return (
        <div className="grid grid-cols-1 2xl:grid-cols-2 place-items-center">
            {
                data.map((order) => {
                    return (
                        <div key={order.id} className='w-full max-w-3xl 2xl:max-w-5xl 2xl:text-2xl p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl font-montserrat'>
                            <p className='mb-2 font-medium text-dark-violet'><b>N° de orden </b> {order.orderNumber} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Cliente </b> {order.user} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Evento </b> {order.event} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Fecha de compra </b> {order.purchaseDate} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Total ($) </b> {order.total} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrderAdminCard
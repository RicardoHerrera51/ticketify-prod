import moment from "moment";

const OrderAdminCard = ({ orders = [] }) => {

    moment.locale();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto place-items-center md:w-10/12">
            {
                orders.map((order) => {
                    return (
                        <div key={order.uuid} className='w-11/12 h-full max-w-3xl 2xl:max-w-5xl 2xl:text-2xl p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl font-montserrat'>
                            <p className='mb-2 font-medium text-dark-violet'><b>Código de órden </b> {order.uuid} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Cliente </b> {order.user.firstname} {order.user.lastname} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Email </b> {order.user.email} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Fecha y hora de compra </b> {moment(order.purchaseDate).format('DD/MM/YYYY - h:mm:ss a')} </p>
                            <p className='mb-2 font-medium text-dark-violet'><b>Total ($) </b> {order.total} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OrderAdminCard
import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import OrderAdminCard from "../../components/OrderAdminCard/OrderAdminCard"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { allOrderServices } from "../../services/OrderServices"
import { toast } from "react-toastify"


const OrderAdmin = () => {

    const [page, setPage] = useState(0);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [totalPages, setTotalPages] = useState(1)
    const [orders, setOrders] = useState([])
    const [searchOrder, setSearchOrder] = useState('')

    useEffect(() => {
        let getOrders = async () => {
            try {
                const filters = { size: 10, page: page }
                const response = await allOrderServices.getOrders(filters)
                console.log(response)

                setIsNextPageAvailable(response.isNextPageAvailable)
                setTotalPages(response.totalPages)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setOrders(response.items.content)
            } catch (error) {
                console.error(error);
            }
        };
        getOrders();
    }, [page]);

    const next = () => {
        if (isNextPageAvailable) {
            window.scrollTo(0, 0);
            setPage(page + 1);
        }
    }

    const prev = () => {
        if (page > 0) {
            window.scrollTo(0, 0);
            setPage(page - 1);
        }
    }

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        searchOrderById()
    }

    async function searchOrderById() {
        try {
            console.log(searchOrder)
            const response = await allOrderServices.getOneById(searchOrder)

            if (!response.success) {
                toast("No se encontró la orden.", { type: 'warning' })
                throw new Error("Algo salió mal !!! :/")
            }

            toast("Orden encontrada", { type: 'success' })
            setOrders(response.data)
            setSearchOrder('')
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-5xl">Órdenes</h1>
            </div>
            {/*<div className="grid grid-cols-1 p-4 mb-4 md:w-1/2 max-w-full">
                <form className="mx-4" onSubmit={onSubmit}>
                    <label
                        htmlFor="searchOrder"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only">Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="search"
                            id="searchOrder"
                            onChange={(e) => onChange(e, setSearchOrder)}
                            value={searchOrder}
                            className="block w-full p-2.5 pl-10 md:mt-7 text-base text-penn-blue font-medium border border-gray-300 hover:border-pure-indigo rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-1.5 bg-pure-indigo hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar orden</button>
                    </div>
                </form>
    </div>*/}
            <OrderAdminCard orders={orders} className="w-full max-w-full p-4" />
            <div className="text-center mx-auto my-8">
                <button className='rounded-full left-2 border border-pure-indigo bg-light-gray text-pure-indigo hover:bg-pure-indigo hover:text-white w-16 h-10 p-2 ml-4 md:text-sm my-auto font-montserrat' onClick={prev}>
                    <span><ArrowBackIcon /></span>
                </button>
                <button className='rounded-full left-2 border border-pure-indigo bg-light-gray text-pure-indigo hover:bg-pure-indigo hover:text-white w-16 h-10 p-2 ml-4 md:text-sm my-auto font-montserrat' onClick={next}>
                    <span><ArrowForwardIcon /></span>
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default OrderAdmin
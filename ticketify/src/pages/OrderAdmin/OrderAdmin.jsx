import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import OrderAdminCard from "../../components/OrderAdminCard/OrderAdminCard"
import SearchBar from "../../components/SearchBar/SearchBar"


const OrderAdmin = () => {
    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="p-4 mb-2">
                <h1 className="text-pure-indigo font-montserrat font-bold text-5xl">Órdenes</h1>
            </div>
            <div className="grid grid-cols-1 p-4 mb-4 max-w-full">
                <SearchBar />
            </div>
            <OrderAdminCard className="w-full max-w-full p-4" />
            <Footer />
        </div>
    )
}

export default OrderAdmin
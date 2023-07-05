import { Select } from "flowbite-react"
import Footer from "../../components/Footer/Footer"
import UserAdminCard from "../../components/UserAdminCard/UserAdminCard"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"


const UserAdmin = () => {
    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="p-4 mb-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-5xl">Usuarios</h1>
            </div>
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <p className="font-montserrat text-dark-violet font-bold text-lg">Filtrar por rol de usuario: </p>
                <Select id="eventName" className="relative w-72 md:w-1/2 mb-4 border border-dark-violet rounded-lg shadow-md text-dark-violet font-medium bg-white hover:border-violet-700 focus:ring-dark-violet focus:border-dark-violet">
                    <option> Administrador del sistema </option>
                    <option> Administrador de eventos </option>
                    <option> Visualizador de estadísticas </option>
                    <option> Cliente </option>
                </Select>
            </div>
            <UserAdminCard className="w-full max-w-full p-4" />
            <Footer />
        </div>
    )
}

export default UserAdmin
import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import OrganizersForm from "../../components/OrganizersForm/OrganizersForm"
import OrganizersTable from "../../components/OrganizersTable/OrganizersTable"
import SearchBar from "../../components/SearchBar/SearchBar"


const OrganizerAdmin = () => {
    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="grid grid-cols-1 mb-2 p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl">Organizadores</h1>
            </div>
            <div className="grid grid-cols-1 p-4 mb-4 max-w-full">
                <SearchBar />
            </div>
            <OrganizersTable className="w-full max-w-full p-4" />
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar organizador</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <OrganizersForm />
            </div>
            <Footer />
        </div>
    )
}

export default OrganizerAdmin
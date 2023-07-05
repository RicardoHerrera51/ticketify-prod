import Footer from "../../components/Footer/Footer"
import SponsorsTable from "../../components/SponsorsTable/SponsorsTable"
import SponsorsForm from "../../components/SponsorsForm/SponsorsForm"
import SearchBar from "../../components/SearchBar/SearchBar"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"

const SponsorAdmin = () => {
    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="grid grid-cols-1 mb-2 p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl">Patrocinadores</h1>
            </div>
            <div className="grid grid-cols-1 p-4 mb-4 max-w-full">
                <SearchBar />
            </div>
            <SponsorsTable className="w-full max-w-full p-4" />
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar patrocinador</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <SponsorsForm />
            </div>
            <Footer />
        </div>
    )
}

export default SponsorAdmin
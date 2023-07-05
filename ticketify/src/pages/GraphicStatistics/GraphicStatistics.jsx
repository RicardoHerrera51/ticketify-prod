import Footer from "../../components/Footer/Footer"
import AttendanceGraphic from "../../components/AttendanceGraphic/AttendanceGraphic"
import AttendanceFlowGraphic from "../../components/AttendanceFlowGraphic/AttendanceFlowGraphic"
import EntryTypeGraphic from "../../components/EntryTypeGraphic/EntryTypeGraphic"
import TicketsStatsGraphic from "../../components/TicketsStatsGraphic/TicketsStatsGraphic"
import TicketsByTierGraphic from "../../components/TicketsByTierGraphic/TicketsByTierGraphic"
import TicketsPerHourGraphic from "../../components/TicketsPerHourGraphic/TicketsPerHourGraphic"
import { Select } from "flowbite-react"
import SaveIcon from '@mui/icons-material/Save'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"

const GraphicStatistics = () => {
    return (
        <div className="w-full max-w-full bg-light-gray">
            <NavbarAdmin />
            <div className="p-4 mb-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl">Estadísticas y opciones</h1>
            </div>
            <div className="grid grid-cols-1 m-auto">
                <div className="w-full max-w-full px-3 md:px-6">
                    <p className="font-montserrat text-dark-violet font-bold text-lg">Evento: </p>
                    <Select id="eventName" className="relative w-72 md:w-1/2 mb-4 border border-dark-violet rounded-lg shadow-md text-dark-violet font-medium bg-white hover:border-violet-700 focus:ring-dark-violet focus:border-dark-violet">
                        <option> Motomami World Tour </option>
                        <option> Ferxxo Nitro Jam Tour </option>
                        <option> The 1975 - At their very best </option>
                        <option> Foodsion </option>
                    </Select>
                </div>
            </div>
            <hr className="mx-auto mt-4 mb-8 bg-penn-blue w-11/12 h-0.5" />
            <div className="grid grid-cols-1 md:grid-cols-2 m-auto mb-16">
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Flujo de asistencia</h3>
                    <AttendanceFlowGraphic />
                </div>
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Tickets vendidos</h3>
                    <TicketsStatsGraphic />
                </div>
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Tickets vendidos por localidad</h3>
                    <TicketsByTierGraphic />
                </div>
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Tickets canjeados por hora</h3>
                    <TicketsPerHourGraphic />
                </div>
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Entradas por grupo vs individual</h3>
                    <EntryTypeGraphic />
                </div>
                <div className="w-full">
                    <h3 className="text-pure-indigo font-montserrat font-bold text-2xl ml-8">Porcentaje de asistencia</h3>
                    <AttendanceGraphic />
                </div>
            </div>
            <h3 className="text-pure-indigo font-montserrat font-bold text-4xl ml-8 mb-4">Opciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mb-4 px-8">
                <div className="w-full mb-2">
                    <p className="text-penn-blue font-montserrat font-medium text-xl text-center md:text-left md:text-2xl">Generar archivos de estadísticas</p>
                </div>
                <div className="w-full mb-2">
                    <div className="space-y-2 space-x-2 text-center md:text-right">
                        <button className='rounded-lg left-2 bg-silver hover:bg-gray-400 w-40 h-10 p-2 text-white md:text-sm my-auto font-montserrat' type='button'>
                            <span><InsertDriveFileOutlinedIcon className='mr-2 align-text-top' fontSize='small' /> Generar PDF</span>
                        </button>
                        <button className='rounded-lg left-2 bg-silver hover:bg-gray-400 w-40 h-10 p-2 text-white md:text-sm my-auto font-montserrat' type='button'>
                            <span><InsertDriveFileOutlinedIcon className='mr-2 align-text-top' fontSize='small' /> Generar Excel</span>
                        </button>
                    </div>
                </div>
                <hr className="mx-auto mt-4 mb-4 md:col-span-2 bg-penn-blue w-full h-0.5" />
                <div className="w-full mb-2">
                    <p className="text-penn-blue font-montserrat font-medium text-xl text-center md:text-left md:text-2xl">Dar de baja el sitio temporalmente</p>
                </div>
                <div className="w-full flex justify-center md:justify-end mb-2">
                    <div>
                        <label className="relative items-center  cursor-pointer">
                            <input id="eventStatus" type="checkbox" value="" className="sr-only peer" />
                            <div className="w-14 h-7 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-dark-violet"></div>
                        </label>
                    </div>
                </div>
                <div className="w-full mt-4 mb-2 md:col-span-2 text-right">
                    <button className='rounded-lg left-2 bg-pure-indigo hover:bg-violet-700 w-48 h-10 p-2 text-white md:text-sm my-auto font-montserrat' type='button'>
                        <span><SaveIcon className='mr-2 align-text-top' fontSize='small' /> Guardar cambios</span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GraphicStatistics
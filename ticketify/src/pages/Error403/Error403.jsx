import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import { useNavigate } from 'react-router-dom';

const Error403 = () => {

    let navigate = useNavigate()
    
    const onRedirect = (e) => {
        e.preventDefault()
        navigate("/login");
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-200">
            <ReportTwoToneIcon className="m-4 text-red-800" sx={{ fontSize: 120 }} />
            <h1 className="text-8xl font-montserrat font-extrabold text-center mb-6 text-red-800">403</h1>
            <h2 className="text-3xl font-montserrat font-medium text-center text-red-800">Acceso no autorizado</h2>
            <p className="text-xl font-montserrat font-medium text-center text-red-800">
                Algo salió mal. No tienes acceso para visualizar este contenido.
            </p>
            <button onClick={onRedirect} className="font-montserrat bg-gray-400 m-4 py-2 px-4 rounded-full hover:bg-gray-500">
                Ir al inicio
            </button>
        </div>
    )
}

export default Error403
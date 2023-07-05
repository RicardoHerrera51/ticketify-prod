import logo from '../../assets/img/ticketifyLogo.png'
import { useAppContext } from '../../context/AppContext'
import { getToken } from '../../context/AppContext';

const Sidebar = () => {

    const { logout } = useAppContext();

    const logoutHandler = () => {
        logout()
        window.location.href = './login'
    }

    return (
        <div>
            <ul className="absolute z-10 right-0 py-2 w-64 md:w-1/4 bg-penn-blue shadow-lg h-full">
                <li>
                    <a href={'/'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Inicio
                    </a>
                </li>
                {!getToken()  ? (
                    <li>
                        <a href={'../login'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                            Iniciar sesión
                        </a>
                    </li>
                ) : null}
                <li>
                    <a href={'../profile'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Perfil
                    </a>
                </li>
                <li>
                    <a href={'../../events'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Eventos
                    </a>
                </li>
                <li>
                    <a href={'../../mytickets'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Mis Tickets
                    </a>
                </li>
                {getToken() ? (
                    <li>
                        <a href={'./scanner'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                            Scanner
                        </a>
                    </li>
                ) : null}
                <li>
                    <a href={'../contactus'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Contáctanos
                    </a>
                </li>
                <li>
                    <a href={'../faq'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Preguntas frecuentes
                    </a>
                </li>
                <li>
                    <a href={'../help'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Ayuda
                    </a>
                </li>
                <li>
                    <a href={'../aboutus'} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                        Quiénes somos
                    </a>
                </li>
                {getToken() ? (
                    <li>
                        <a onClick={logoutHandler} className="block px-4 py-2 text-sm text-white hover:bg-violet-blue">
                            Cerrar sesion
                        </a>
                    </li>
                ) : null}
                <li className='absolute bottom-0 left-0'>
                    <a href="#" className="block px-4 py-2">
                        <img src={logo} className='w-32' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

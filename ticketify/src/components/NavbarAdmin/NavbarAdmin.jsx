import { useState } from 'react'
import logo from '../../assets/img/ticketifyLogo.png'
import iconNav from '../../assets/img/iconNav.png'
import SidebarAdmin from './SidebarAdmin/SidebarAdmin'

const NavbarAdmin = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='w-full'>
            <nav className='grid grid-flow-col-dense w-full bg-penn-blue py-3.5 md:py-0'>
                <div className='w-fit h-full'>
                    <a href={'/'} className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <img src={logo} className="w-24" alt="Ticketify Logo" />
                    </a>
                </div>
                <div className='w-auto h-full my-auto'>
                    <div className='flex w-auto h-full py-2 pl-3 pr-4'>
                    </div>
                </div>
                <div className='w-auto h-full relative'>
                    <button onClick={toggleSidebar} type="button" className="md:absolute md:inset-y-4 md:right-0 md:mr-4 p-2 ml-4 text-sm text-white rounded-lg" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <img src={iconNav} className="h-4 w-5" alt="#" />
                    </button>
                </div>
            </nav>
            {isVisible && (<SidebarAdmin />)}
        </div>
    )
}

export default NavbarAdmin
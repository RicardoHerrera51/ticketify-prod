import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import UserRolesCard from "../../components/UserRolesCard/UserRolesCard"
import { allUserRolesServices } from "../../services/UserRolesServices"
import { ToastContainer, toast } from 'react-toastify';

const UserRolesAdmin = () => {

    const [roles, setRoles] = useState([])
    const [userRoles, setUserRoles] = useState([])


    useEffect(() => {
        const fetchRoles = async () => {
            try {
                let response = await allUserRolesServices.getAllRoles()

                if (!response.success) {
                    toast("Algo salió mal.", { type: 'error' })
                    throw new Error('Algo salió mal')
                }

                setRoles(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchRoles();
        const fetchUserRoles = async () => {
            try {
                let response = await allUserRolesServices.getAllUserRoles()

                if (!response.success) {
                    toast("Algo salió mal.", { type: 'error' })
                    throw new Error('Algo salió mal')
                }

                setUserRoles(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserRoles();
    }, []);

    return (
        <div className="w-full max-w-full bg-light-gray">
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <NavbarAdmin />
            <div className="p-4 mb-2">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl mb-8">Permisos de usuario</h1>
            </div>
            <UserRolesCard roles={roles} userRoles={userRoles} className="w-full max-w-full " />
            <Footer />
        </div>
    )
}

export default UserRolesAdmin
import { useState, useEffect } from 'react'
import QRCode from 'react-qr-code'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { getUser, updateUserPassword } from '../../services/UserService'

function Profile() {
    const [qrData, setQRData] = useState('')
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUser();
                setUser(result.user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [setUser]);

    useEffect(() => {
        setQRData(user?.email)
    }, [user])

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setPasswordError("Las contraseñas no coinciden");
            return;
        } else {
            updateUserPassword(newPassword, confirmPassword)
        }

        // Restablecer los campos del formulario
        setNewPassword("");
        setConfirmPassword("");
        setPasswordError("");
    }


    return (
        <div className='font-montserrat'>
            <Navbar />
            <p className="m-4 text-pure-indigo text-4xl sm:text-5xl font-extrabold">
                Perfil
            </p>
            <div className="flex flex-col items-center">
                <div className='border rounded-lg shadow-md m-16 pl-16 pr-16'>
                    {qrData && (
                        <div>
                            <div key={user?.id} className="flex flex-col items-center m-4">
                                <p className="text-center mb-2 font-light">{user?.firstname}</p>
                                <p className="text-center mb-2 font-medium">{user?.email}</p>
                                <div className="flex justify-center m-6">
                                    <QRCode value={qrData} />
                                </div>
                            </div>
                        </div>
                    )}

                    <hr className='h-0.1 bg-silver' />

                    <form onSubmit={handleSubmit} className="flex flex-col m-4">
                        <h2 className="text-xl font-semibold text-pure-indigo">Cambiar contraseña</h2>
                        <div className="flex flex-col my-4">
                            <label htmlFor="newPassword" className="mb-2">
                                Nueva contraseña
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label htmlFor="confirmPassword" className="mb-2">
                                Confirmar nueva contraseña
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="border border-gray-300 rounded px-2 py-1"
                            />
                        </div>
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                        <button
                            type="submit"
                            className="bg-pure-indigo text-white px-4 py-2 rounded-full m-4"
                        >
                            Guardar contraseña
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
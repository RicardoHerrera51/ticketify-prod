import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { saveUser } from '../../services/UserService';

function SetPassword() {
    let navigate = useNavigate()
    const { email, firstName, lastName } = useParams();

    const [passwords, setPasswords] = useState({
        newPassword: "",
        confirmPassword: "",
    })
    const [passwordError, setPasswordError] = useState("")

    const handleInputChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwords.newPassword !== passwords.confirmPassword) {
            setPasswordError("Las contraseñas no coinciden");
        } else {
            await saveUser(firstName, lastName, email, passwords.newPassword);
            navigate("/");
        }
    }

    return (
        <div className="bg-penn-blue flex justify-center items-center h-screen font-montserrat">
            <div
                className="bg-white shadow-md rounded-lg p-10"
            >
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-lg font-normal mb-2"
                        htmlFor="newPassword"
                    >
                        Nueva Contraseña
                    </label>
                    <input
                        className="peer placeholder-silver text-sm font-light h-10 w-full border shadow-sm rounded-lg border-gray-300 text-gray-900 focus:outline-none"
                        id="newPassword"
                        type="password"
                        placeholder="Nueva contraseña"
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-lg font-normal mb-2"
                        htmlFor="confirmPassword"
                    >
                        Confirmar Contraseña
                    </label>
                    <input
                        className="peer placeholder-silver text-sm font-light h-10 w-full border shadow-sm rounded-lg border-gray-300 text-gray-900 focus:outline-none"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirmar contraseña"
                        name="confirmPassword"
                        value={passwords.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                {passwordError && (
                    <p className="text-red-500 text-xs italic mb-4">{passwordError}</p>
                )}
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleSubmit}
                        className='bg-pure-indigo m-2 py-2 px-8 rounded-full p-3 text-center text-white font-light text-sm shadow-silver shadow-md'
                    >
                        Guardar Contraseña
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SetPassword

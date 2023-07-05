import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { recuperateUserPassword } from '../../services/UserService';

function SavePasswordReset() {
    let navigate = useNavigate()
    const { email } = useParams();

    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const onChange = (e, save) => {
        save(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password && code !== '') {
            recuperateUserPassword(email, password, code)
            navigate("/login");
        } else {
            setPasswordError("Campos incorrectos");
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
                        Codigo
                    </label>
                    <input
                        className="peer placeholder-silver text-sm font-light h-10 w-full border shadow-sm rounded-lg border-gray-300 text-gray-900 focus:outline-none"
                        id="newPassword"
                        type="text"
                        placeholder="Nueva contraseña"
                        name="newPassword"
                        value={code}
                        onChange={(e) => onChange(e, setCode)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-lg font-normal mb-2"
                        htmlFor="confirmPassword"
                    >
                        Nueva Contraseña
                    </label>
                    <input
                        className="peer placeholder-silver text-sm font-light h-10 w-full border shadow-sm rounded-lg border-gray-300 text-gray-900 focus:outline-none"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirmar contraseña"
                        name="confirmPassword"
                        value={password}
                        onChange={(e) => onChange(e, setPassword)}
                        required
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

export default SavePasswordReset;

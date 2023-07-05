import React from 'react'
import { useState } from 'react'
import { requestRecuperateUserPassword } from '../../services/UserService';

function SendEmailResetPassword() {

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        requestRecuperateUserPassword(email);

        window.location.href = `/savepasswordreset/${email}/`;

        // Restablecer los campos del formulario
        setEmail("");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="bg-penn-blue flex justify-center items-center h-screen font-montserrat">
            <form onSubmit={handleSubmit}>
                <div
                    className="bg-white shadow-md rounded-lg p-8"
                >
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-md font-normal mt-4 mb-4"
                        >
                            Correo electronico para recuperar contraseña
                        </label>
                        <input
                            className="peer placeholder-silver text-sm font-light h-10  sm:w-96 w-72 border shadow-sm rounded-lg border-gray-300 text-gray-900 focus:outline-none"
                            id="email"
                            type="email"
                            placeholder="Correo electronico"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className='bg-pure-indigo m-2 py-2 px-8 rounded-full p-3 text-center text-white font-light text-sm shadow-silver shadow-md'
                        >
                            Enviar correo
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default SendEmailResetPassword

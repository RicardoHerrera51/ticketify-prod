import React, { useState } from 'react'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { QrScanner } from '@yudiel/react-qr-scanner'
import { saveTicketQrScanner, requestTransactionQr, saveTransactionQr } from '../../services/UserService'
import { getId } from '../../context/AppContext'
import { useEffect } from 'react'

function Scanner() {
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState('');
  const [ticket, setTicket] = useState([]);
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    saveTransactionQr(code, email)
    window.location.href = './';
  }

  const onChange = (e, save) => {
    save(e.target.value);
  };

  useEffect(() => {
    if (ticket?.length == 0) {
      async function fetchTicketQr() {
        let response = await saveTicketQrScanner(result)
        // userFrom, userTo, ticket
        if (response.success) {
          setTicket(response);
          requestTransactionQr(response.result.user.uuid, getId(), response.result.uuid)
        }
      }
      fetchTicketQr();
    }
  }), [setTicket, result];

  const handleDecode = (decodedResult) => {
    setResult(decodedResult)
    setTimeout(() => {
      setScanned(true)
    }, 3000)
  };

  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-full md:w-2/4 lg:w-1/3 sm:-2 m-12">
          {!scanned ? (
            <QrScanner
              onDecode={handleDecode}
              onError={(error) => console.log(error?.message)}
            />
          ) : (
            <div className="text-center mx-auto mt-16">
              <p className="text-2xl font-bold mb-4 text-pure-indigo">¡Código QR reconocido!</p>
              <p className="text-xl font-semibold">{result}</p>
              <div className="bg-white shadow-md rounded-lg p-8 mt-8">
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-normal mb-2 text-left" htmlFor="newPassword">
                    Código
                  </label>
                  <input
                    className="peer placeholder-silver text-sm font-light h-12 w-full border border-gray-300 rounded-lg text-gray-900 focus:outline-none px-3"
                    id="code"
                    type="text"
                    placeholder="Código"
                    name="code"
                    onChange={(e) => onChange(e, setCode)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-normal mb-2 text-left" htmlFor="newPassword">
                    Correo
                  </label>
                  <input
                    className="peer placeholder-silver text-sm font-light h-12 w-full border border-gray-300 rounded-lg text-gray-900 focus:outline-none px-3"
                    id="email"
                    type="email"
                    placeholder="Correo"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e, setEmail)}
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-pure-indigo m-2 py-2 px-8 rounded-full text-white font-light text-sm shadow-silver shadow-md"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Scanner

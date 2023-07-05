import logo from '../../assets/img/ticketifyWhiteLogo.png'
import homeIcon from '../../assets/img/homeIcon.png'
import callIcon from '../../assets/img/callIcon.png'
import whatsappIcon from '../../assets/img/whatsappIcon.png'

const Footer = () => {
    return (
        <>
            <footer className="bg-penn-blue text-white font-monserat font-light lg:text-lg xs:text-s">
                <div className="mx-auto w-full max-w-screen-xl lg:py-4">
                    <div className="grid grid-cols-1 p-5 gap-x-12 sm:gap-9 sm:grid-cols-3">
                        <div className="mb-6">
                            <img src={logo} className="h-20" alt="#" />
                        </div>
                        <div>
                            <ul>
                                <li className="mb-4">
                                    <a href={'../termsandconditions'}>Terminos y condiciones</a>
                                </li>
                                <li className="mb-4">
                                    <a href={'../faq'}>Preguntas frecuentes</a>
                                </li>
                                <li className="mb-4">
                                    <a href={'../aboutus'}>Quienes somos</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="mb-4">
                                    <p className="flex items-top justify-top">
                                        <img src={homeIcon} className="h-4 mr-4 mt-1" alt="#" />
                                        Millennium Plaza <br /> #A78 Gral. Escalón,<br />San Salvador
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="flex items-left justify-left">
                                        <img src={callIcon} className="h-4 mr-4 mt-1" alt="#" />
                                        +503 2345-6789
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <p className="flex items-left justify-left">
                                        <img src={whatsappIcon} className="h-5 mr-4 mt-1" alt="#" />
                                        +503 7890-1234
                                    </p>
                                </li>
                            </ul>
                            <div className="my-2">
                                <span>© 2023 Ticketify El Salvador</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
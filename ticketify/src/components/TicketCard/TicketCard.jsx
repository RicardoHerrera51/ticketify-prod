import React from 'react'
import './TicketCard.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';

const TicketCard = ({ code, title, image, location, date, hour, event, chair}) => {

    return(
        <div className='justify-self-center'>
            <a id='mainTicket' href="#" className="flex flex-row items-center mb-8 mt-0 justify-center rounded-lg border bg-white shadow-md md:max-w-4xl ">
                <div id='ticketImgContainer' className="flex flex-row">
                    <img id='ticketImg' className="w-full rounded-lg object-fill m-0 sm:h-70 sm:w-72 md:h-96 md:w-80 md:rounded-none md:rounded-l-lg" src={image}/>
                </div>

                <div id="ticketInfoContainer" className="leading-normal">
                    <div className="justify-between p-4 leading-normal">
                        <h5 id="ticketTitle" className="mb-2 text-2xl font-bold tracking-tight text-pure-indigo">{title}</h5>
                        <ul className="mt-4 mb-2 pl-2 space-y-4 text-left text-pure-indigo ">
                            <li className="flex items-center text-sm space-x-3">
                                <LocationOnOutlinedIcon/>
                                <span>{location}</span>
                            </li>
                            <li className="flex items-center text-sm space-x-3">
                                <CalendarMonthOutlinedIcon/>
                                <span>{date} - {hour}</span>
                            </li>
                            <li className="flex items-center text-sm space-x-3">
                                <InfoOutlinedIcon/>
                                <span>{event}</span>
                            </li>
                            <li className="flex items-center text-sm space-x-3">
                                <ChairOutlinedIcon/>
                                <span>{chair}</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div id='ticketButtonsContainer' className="flex flex-col justify-center ml-4">
                        <a href={`/qrticket/${code}/`}>
                        <button type="button" className="bg-pure-indigo text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                            GENERAR QR
                        </button>
                        </a>
                    </div> 
                </div>
            </a>
        </div>
    )
}

export default TicketCard;

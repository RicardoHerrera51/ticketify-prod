import React from 'react'
import './CardEvent.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const CardEvent = ({ code, title, location, date, hour, event, image }) => {
    return (
        <div className="max-w-sm bg-white border rounded-lg shadow-md">
            <a href={`./preorder/${code}/`}>
                <img className="rounded-t-lg w-full" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href={`./preorder/${code}/`}>
                    <h5 className="mb-2 text-md font-bold tracking-tight text-pure-indigo">{title}</h5>
                    <ul className="mt-4 mb-2 pl-2 space-y-4 text-left text-pure-indigo">
                        <li className="flex items-center text-sm space-x-3">
                            <LocationOnOutlinedIcon />
                            <span>{location}</span>
                        </li>
                        <li className="flex items-center text-sm space-x-3">
                            <CalendarMonthOutlinedIcon />
                            <span>{date} - {hour}</span>
                        </li>
                        <li className="flex items-center text-sm space-x-3">
                            <InfoOutlinedIcon />
                            <span>{event}</span>
                        </li>
                    </ul>
                </a>
            </div>
        </div>

    )
}

export default CardEvent;

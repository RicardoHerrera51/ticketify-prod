import React from "react";
import './TicketsCards.css'
import TicketCard from "../TicketCard/TicketCard";
import moment from "moment";

const TicketsCards = ({tickets}) => {
    return (
        <div>
            <div className="container mx-auto flex-col flex justify-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-pure-indigo m-4">Tickets</h1>
                <div className="grid px-4 grid-cols-1">
                    {tickets?.map((ticket, index) => (
                        <TicketCard  
                        key={index}
                        code={ticket?.uuid}
                        title={ticket.tier?.event?.title}
                        image={ticket.tier?.event?.image}
                        location={ticket.tier?.event?.place}
                        date={moment(ticket.tier?.event?.date).format('YYYY-MM-DD')}
                        hour={moment(ticket.tier?.event?.hour).format('HH:mm A')}
                        event={ticket.tier?.event?.category?.category}
                        chair={ticket.tier.tier}>
                        </TicketCard>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TicketsCards;
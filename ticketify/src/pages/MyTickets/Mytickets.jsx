import React from 'react'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import TicketsCards from "../../components/TicketsCards/TicketsCards"
import { getTicketsByUser } from '../../services/UserService'
import { useEffect, useState } from 'react';

function MyTickets() {
    const [ticket, setTicket] = useState([]);

    useEffect(() => {   
        if (ticket?.length == 0) {
            async function fetchTicketByUser() {
                let response = await getTicketsByUser();
                if (response.success) {
                    setTicket(response.items);
                }
            }
            fetchTicketByUser();
        }
    }), [setTicket];

    return (
        <div className="font-montserrat">
            <Navbar />
            <TicketsCards tickets={ticket}/>
            <Footer />
        </div>
    )
}


export default MyTickets
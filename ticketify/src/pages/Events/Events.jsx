import React from 'react';
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import EventsCards from '../../components/CardsEvent/CardsEvents'
import { getEvents } from '../../services/UserService'
import { useEffect, useState } from 'react';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {   
        if (events.length == 0) {
            async function fetchAllEvents() {
                let response = await getEvents();
                if (response.success) {
                    setEvents(response.items);
                }
            }
            fetchAllEvents();
        }
    }), [setEvents];

    return (
        <div>
            <Navbar />
            <EventsCards events={events}/>
            <Footer />
        </div>
    )
}

export default Events

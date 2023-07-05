import React from "react"
import CardEvent from "../CardEvent/CardEvent"
import moment from 'moment';

const EventsCards = ({events}) => {
    return (
        <div>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-pure-indigo m-4">Eventos</h1>
                <div className="grid px-4 pb-4 grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {events.map((event, index) => (
                        <CardEvent
                            key={index}
                            code={event.id}
                            title={event.title}
                            image={event.image}
                            location={event.place}
                            date={moment(event.date).format('YYYY-MM-DD')}
                            hour={moment(event.hour).format('HH:mm A')}
                            event={event.category?.category}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default EventsCards; 
import OrganizerRow from "./OrganizersRow/OrganizerRow"

const OrganizersTable = ({ organizers = [] }) => {
    return (
        <div className="w-full md:w-9/12 mx-auto">
            <div className='relative overflow-x-auto shadow-md'>
                <table className='w-full text-left font-montserrat'>
                    <thead className='text-white bg-dark-violet text-center'>
                        <tr>
                            <th scope='col' className='px-6 py-2 border-r border-white'>
                                Identificador
                            </th>
                            <th scope='col' className='px-6 py-2 border-r border-white'>
                                Organizador
                            </th>
                            <th scope='col' className='px-6 py-2 border-r border-white'>
                                Evento
                            </th>
                            <th scope='col' className='px-6 py-2'>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <OrganizerRow organizers={organizers} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrganizersTable
import DeleteButton from "../../DeleteButton/DeleteButton"
import EditButton from "../../EditButton/EditButton"

const data = [
    { id: 1, name: "Producciones Two Shows" },
    { id: 2, name: "Producciones Star" },
    { id: 3, name: "Eventos Premium" },
    { id: 4, name: "Noise Producer" },
    { id: 5, name: "Deluxe Productions" },
    { id: 6, name: "Casa de la Cultura" },
    { id: 7, name: "Petfriendly SV" },
    { id: 8, name: "VIP Eventos" },
    { id: 9, name: "Producciones Golden" },
    { id: 10, name: "Eventos Platinum" },
]

const OrganizerRow = () => {
    return (
        <>
            {
                data.map((organizer) => {
                    return (
                        <tr key={organizer.id} className='bg-light-gray border-b border-dark-violet hover:bg-gray-300 place-content-center'>
                            <th scope='row' className='px-4 py-2 font-medium whitespace-nowrap text-dark-violet border-r border-dark-violet w-1/2 md:w-2/3'>
                                <p>{organizer.name}</p>
                            </th>
                            <td className='py-2 space-x-2 space-y-2 text-center'>
                                <EditButton />
                                <DeleteButton />
                            </td>
                        </tr >
                    )
                })
            }
        </>

    )
}

export default OrganizerRow
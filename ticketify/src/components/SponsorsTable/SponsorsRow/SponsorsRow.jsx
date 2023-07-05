import DeleteButton from "../../DeleteButton/DeleteButton"
import EditButton from "../../EditButton/EditButton"

const data = [
    { id: 1, name: "Golden" },
    { id: 2, name: "Claro Music" },
    { id: 3, name: "Coca Cola" },
    { id: 4, name: "Papa Johns" },
    { id: 5, name: "BAC Credomatic" },
    { id: 6, name: "Pepsi" },
    { id: 7, name: "Movistar" },
    { id: 8, name: "EXA FM" },
    { id: 9, name: "Sistema Fedecredito" },
    { id: 10, name: "Pilsener" },
]

const SponsorsRow = () => {
    return (
        <>
            {
                data.map((sponsor) => {
                    return (
                        <tr key={sponsor.id} className='bg-light-gray border-b border-dark-violet hover:bg-gray-300 place-content-center'>
                            <th scope='row' className='px-4 py-2 font-medium whitespace-nowrap text-dark-violet border-r border-dark-violet w-1/2 md:w-2/3'>
                                <p>{sponsor.name}</p>
                            </th>
                            <td className='py-2 space-x-2 space-y-2 text-center'>
                                <EditButton />
                                <DeleteButton />
                            </td>
                        </tr>
                    )
                })
            }

        </>
    )
}

export default SponsorsRow
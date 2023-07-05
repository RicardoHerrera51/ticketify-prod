import SponsorsRow from './SponsorsRow/SponsorsRow'

const SponsorsTable = () => {
    return (
        <div className='w-full md:w-9/12 mx-auto'>
            <div className='relative overflow-x-auto shadow-md'>
                <table className='w-full text-left font-montserrat'>
                    <thead className='text-white bg-dark-violet text-center'>
                        <tr>
                            <th scope='col' className='px-6 py-2 border-r border-white'>
                                Patrocinador
                            </th>
                            <th scope='col' className='px-6 py-2'>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <SponsorsRow />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SponsorsTable
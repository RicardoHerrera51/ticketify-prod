import CategoriesRow from "./CategoriesRow/CategoriesRow"

const CategoriesTable = ({ categories = [] }) => {
    return (
        <div className="w-full md:w-9/12 mx-auto">
            <div className='relative overflow-x-auto shadow-md'>
                <table className='w-full text-left font-montserrat'>
                    <thead className='text-white bg-dark-violet text-center'>
                        <tr>
                            <th scope='col' className='px-2 py-2 border-r border-white'>
                                Identificador
                            </th>
                            <th scope='col' className='px-6 py-2 border-r border-white'>
                                Categoría
                            </th>
                            <th scope='col' className='px-6 py-2'>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CategoriesRow categories={categories} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoriesTable
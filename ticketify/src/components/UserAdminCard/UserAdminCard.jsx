import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteButton from '../DeleteButton/DeleteButton';

const data = [
    { id: 1, name: "María José", lastName: "Campos Hernández", email: "maria_campos@gmail.com", status: true },
    { id: 2, name: "Ricardo Andrés", lastName: "Herrera Ponce", email: "ricardo_ponce@gmail.com", status: true },
    { id: 3, name: "Carlos Federico", lastName: "Ramírez Soriano", email: "federico_ramirez@gmail.com", status: false },
    { id: 4, name: "Luis Alonso", lastName: "Rivera Beltrán", email: "alonso_rivera@gmail.com", status: true },
]

const UserAdminCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center">
            {
                data.map(user => {
                    return (
                        <div key={user.id} className='w-full max-w-lg p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl font-montserrat'>
                            <p className='mb-2 font-medium text-dark-violet break-words'><b>Nombre </b>{user.name}</p>
                            <p className='mb-2 font-medium text-dark-violet break-words'><b>Apellido </b>{user.lastName}</p>
                            <p className='mb-2 font-medium text-dark-violet break-words'><b>Correo electrónico </b>{user.email}</p>
                            <p className='mb-2 font-medium text-dark-violet break-words'><b>Estado </b>
                                {user.status ? <span className='text-pure-green ml-4'><CheckCircleIcon /></span> 
                                : <span className='text-danger-red ml-4'><CancelIcon /></span>}
                            </p>
                            <div className='flex justify-end mt-6 w-full'>
                                <DeleteButton />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserAdminCard
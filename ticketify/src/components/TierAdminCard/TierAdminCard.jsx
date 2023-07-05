import { deleteTier } from "../../helpers/AdminHelper";
import { allTierServices } from "../../services/TierServices";
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-toastify";

const TierAdminCard = ({ tiers = [] }) => {

    const onClickDelete = (id) => {
        swal({
            title: "Confirmar acción",
            text: "Está apunto de borrar un registro permanentemente ¿Está seguro que desea continuar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                deleteTier(id)
            } 
          });
    }

    async function deleteTier(id) {
        try {
            const response = await allTierServices.deleteTier(id);
            if (!response.success) {
                toast("Algo salió mal.", { type: 'error' })
                throw new Error('Something was wrong')
            }

            toast("Categoría eliminada", { type: 'success' })
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 place-items-center">
            {
                tiers.map(tier => {
                    return (
                        <div key={tier.id} className="w-full max-w-full p-2">
                            <div className='max-w-xl md:h-64 m-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl font-montserrat font-medium'>
                                <p className='mb-2  text-dark-violet break-words'><b>Nombre de la localidad </b>{tier.tier}</p>
                                <p className='mb-2 text-dark-violet break-words'><b>Precio ($) </b>{tier.price}</p>
                                <p className='mb-2 text-dark-violet break-words'><b>Capacidad </b>{tier.capacity} personas</p>
                                <p className='mb-2 text-dark-violet break-words'><b>Evento </b> {tier.event.title}</p>
                                <div className='space-y-2 space-x-2 text-right h-max mt-4 '>
                                    <button onClick={() => onClickDelete(tier.id)} className='rounded-lg bg-danger-red hover:bg-red-700 w-32 h-10 max-h-fit p-2 text-white md:text-sm my-auto font-montserrat' type='submit'>
                                        <span><DeleteIcon className='mr-2 align-text-top' fontSize='small' />  Eliminar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TierAdminCard
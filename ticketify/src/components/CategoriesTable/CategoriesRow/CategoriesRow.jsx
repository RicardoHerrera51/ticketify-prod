import { ToastContainer, toast } from "react-toastify";
import { allCategoryServices } from "../../../services/CategoryServices";
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert'

const CategoriesRow = ({ categories = [] }) => {

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
                deleteCategory(id)
            } 
          });
    }

    async function deleteCategory(id) {
        try {
            const response = await allCategoryServices.deleteCategory(id);
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
        <>
            {
                categories.map((category) => {
                    return (
                        <tr key={category.id} className='bg-light-gray border-b border-dark-violet hover:bg-gray-300 place-content-center'>
                            <th scope='row' className='px-2 py-2 font-medium whitespace-nowrap text-dark-violet border-r border-dark-violet w-1/2 md:w-1/3'>
                                <p>{category.id}</p>
                            </th>
                            <th scope='row' className='px-4 py-2 font-medium whitespace-nowrap text-dark-violet border-r border-dark-violet w-1/2 md:w-2/3'>
                                <p>{category.category}</p>
                            </th>
                            <td className='p-2 text-center'>
                                <button onClick={() => onClickDelete(category.id)} className='rounded-lg bg-danger-red hover:bg-red-700 w-32 h-10 max-h-fit p-2 text-white md:text-sm my-auto font-montserrat' type='submit'>
                                    <span><DeleteIcon className='mr-2 align-text-top' fontSize='small' />  Eliminar</span>
                                </button>
                            </td>
                        </tr >
                    )
                })
            }
        </>

    )
}

export default CategoriesRow
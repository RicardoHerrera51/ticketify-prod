import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = () => {
    return (
        <button className='rounded-lg bg-danger-red hover:bg-red-700 w-32 h-10 max-h-fit p-2 text-white md:text-sm my-auto font-montserrat' type='submit'>
            <span><DeleteIcon className='mr-2 align-text-top' fontSize='small' />  Eliminar</span>
        </button>
    )
}

export default DeleteButton
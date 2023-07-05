import SaveIcon from '@mui/icons-material/Save';

const SaveButton = () => {
    return (
        <>
            <button className='rounded-lg left-2 bg-pure-indigo hover:bg-violet-700 w-auto md:w-48 h-1/2 p-2 text-white md:text-sm my-auto font-montserrat' type='submit'>
                <span><SaveIcon className='mr-2 align-text-top' fontSize='small' /> Guardar cambios</span>
            </button>
        </>
    )
}

export default SaveButton
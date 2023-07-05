import EditIcon from '@mui/icons-material/Edit';

const EditButton = () => {
    return (
        <button className='rounded-lg left-2 bg-golden-yellow hover:bg-yellow-400 w-32 h-10 p-2 text-white md:text-sm my-auto font-montserrat' type='button'>
            <span><EditIcon className='mr-2 align-text-top' fontSize='small' /> Editar</span>
        </button>
    )
}

export default EditButton
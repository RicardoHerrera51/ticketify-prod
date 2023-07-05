import { useState } from "react";
import { allCategoryServices } from "../../services/CategoryServices";
import SaveButton from "../SaveButton/SaveButton";
import { ToastContainer, toast } from 'react-toastify';

const CategoriesForm = () => {

    const [id, setId] = useState('');
    const [category, setCategory] = useState('')

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        createCategory()
    }

    async function createCategory() {
        try {
            if (id == '' || category == '') {
                toast("Campos vacíos. Por favor llenarlos completamente.", { type: 'error' })
            } else {
                const response = await allCategoryServices.createCategory(id, category)
                
                if (!response.success) {
                    toast("Algo salió mal. Intente nuevamente.", { type: 'error' })
                    throw new Error("Algo salió mal !!! :/")
                }

                toast('Categoría guardada correctamente', { type: 'success' });
                setId('')
                setCategory('')
                window.location.href = '../categories'
            }
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <form action="post" className="font-montserrat font-medium" onSubmit={onSubmit}>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="p-4">
                <label className="block mb-2 text-base text-dark-violet">Identificador de categoría</label>
                <input
                    type="text"
                    placeholder="Identificador de categoría"
                    className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => onChange(e, setId)}
                    value={id}
                    autoComplete="off"
                />
                <label className="block mb-2 text-base text-dark-violet">Categoría de evento</label>
                <input
                    type="text"
                    placeholder="Nombre de la categoría"
                    className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => onChange(e, setCategory)}
                    value={category}
                    autoComplete="off"
                />
                <div className="flex justify-end">
                    <SaveButton />
                </div>
            </div>
        </form>
    )
}

export default CategoriesForm
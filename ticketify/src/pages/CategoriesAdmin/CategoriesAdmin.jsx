import { useEffect, useState } from "react"
import CategoriesForm from "../../components/CategoriesForm/CategoriesForm"
import CategoriesTable from "../../components/CategoriesTable/CategoriesTable"
import Footer from "../../components/Footer/Footer"
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin"
import SearchBar from "../../components/SearchBar/SearchBar"
import { allCategoryServices } from "../../services/CategoryServices"
import { ToastContainer, toast } from "react-toastify"


const CategoriesAdmin = () => {

    const [page, setPage] = useState(0);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(true);
    const [recharge, setRecharge] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchedCategory, setSearchedCategory] = useState('');
    const [foundCategories, setFoundCategories] = useState([]);
    const [title, setTitle] = useState("");


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const filters = { title: title, size: 10, page: page }
                let response = await allCategoryServices.getAllCategories(filters)

                if (searchedCategory !== '')
                    response = await allCategoryServices.getCategoryByName(searchedCategory)

                setIsNextPageAvailable(response.isNextPageAvailable)

                if (!response.success) {
                    throw new Error('Algo salió mal')
                }

                setRecharge(false)
                setCategories(response.items)
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, [page, recharge]);

    const onChange = (e, save) => {
        save(e.target.value);
    }

    async function onSubmit(e) {
        e.preventDefault();
        searchCategory()
    }

    async function searchCategory() {
        try {
            const response = await allCategoryServices.getCategoryByName(searchedCategory)
            console.log(response.data)
            const data = []
            data.push(response.data)
            console.log(data)

            if (!response.success) {
                toast("No se encontró la categoría.", { type: 'warning' })
                throw new Error("Algo salió mal !!! :/")
            }

            // TODO: Reload table with result 
            toast("Categoría encontrada", { type: 'success' })
            setCategories(data)
            setSearchedCategory('')
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <div className="w-full max-w-full bg-light-gray">
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
            <NavbarAdmin />
            <div className="grid grid-cols-1 mb-2 p-4">
                <h1 className="text-pure-indigo font-montserrat font-bold text-4xl md:text-5xl">Categorías de eventos</h1>
            </div>
            <div className="grid grid-cols-1 p-4 mb-4 max-w-full">
                <form onSubmit={onSubmit}>
                    <label
                        htmlFor="searchedCategory"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only">Search
                    </label>
                    <div className="relative w-72 md:w-1/2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="search"
                            id="searchedCategory"
                            onChange={(e) => onChange(e, setSearchedCategory)}
                            value={searchedCategory}
                            className="block w-full p-2.5 pl-10 text-base text-penn-blue font-medium border border-gray-300 hover:border-pure-indigo rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-1.5 bg-pure-indigo hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
                    </div>
                </form>
            </div>
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
            <CategoriesTable categories={categories} className="w-full max-w-full p-4" />
            <div className="grid grid-cols-1 p-4 mt-4 max-w-full">
                <h2 className="text-pure-indigo text-3xl font-montserrat">Agregar categoría de evento</h2>
                <hr className="mt-4 bg-penn-blue h-0.5" />
            </div>
            <div className="grid grid-cols-1 md:w-1/2 m-auto mb-8">
                <CategoriesForm />
            </div>
            <Footer />
        </div>
    )
}

export default CategoriesAdmin
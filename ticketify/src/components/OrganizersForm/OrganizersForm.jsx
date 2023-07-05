import SaveButton from "../SaveButton/SaveButton"

const OrganizersForm = () => {
    return (
        <form action="post" className="font-montserrat font-medium">
            <div className="p-4">
                <label htmlFor="organizerName" className="block mb-2 text-base text-dark-violet">Organizador</label>
                <input type="text" id="organizerName" placeholder="Nombre del organizador" className="block w-full mb-4 p-2 text-dark-violet  border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                <div className="flex justify-end mt-4">
                    <SaveButton />
                </div>
            </div>
        </form>
    )
}

export default OrganizersForm
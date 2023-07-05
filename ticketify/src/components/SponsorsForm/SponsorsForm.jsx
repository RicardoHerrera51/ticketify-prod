import SaveButton from "../SaveButton/SaveButton"

const SponsorsForm = () => {
    return (
        <form action="post" className="font-montserrat font-medium">
            <div className="p-4">
                <label htmlFor="sponsorName" className="block mb-2 text-base text-dark-violet">Patrocinador</label>
                <input type="text" id="sponsorName" placeholder="Nombre del patrocinador" className="block w-full mb-4 p-2 text-dark-violet border border-dark-violet hover:border-violet-700 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500" />
                <div className="flex justify-end mt-4">
                    <SaveButton />
                </div>
            </div>
        </form>
    )
}

export default SponsorsForm
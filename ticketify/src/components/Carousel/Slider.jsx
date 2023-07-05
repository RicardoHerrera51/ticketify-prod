
const Slider = ({images}) => {

    return (
        <>
            <div className='w-full flex h-[17rem] text-center items-center gap-5 overflow-x-scroll p-5 overflow-y-hidden mt-6 mb-8'>
                {images?.map((image, index) => (
                    <div key={index} className='flex gap-10'>
                        <div className='h-[15rem] w-[10rem]'>
                            <img src={image.image} alt={`Image ${index + 1}`} className='object-fill h-[15rem] w-[15rem] rounded-3xl' />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Slider

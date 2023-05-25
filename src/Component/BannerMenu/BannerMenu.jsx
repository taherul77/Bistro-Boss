

const BannerMenu = ({ img,heading,description}) => {
    return (
        <div
        style={{ "--image-url": `url(${img})` }}
        className="bg-[image:var(--image-url)] object-cover bg-no-repeat p-5 md:p-10 lg:px-20 lg:py-24"
    >
        <div className='  bg-black opacity-50 px-7 py-10 text-white md:px-10 lg:px-48 lg:py-20'>
            <div className="text-center">
                <h3 className="uppercase  text-4xl mb-5">{heading}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
    );
};

export default BannerMenu;


const SectionTitle = ({heading ,SubHeading}) => {
    return (
        <div className="mx-auto text-center my-8 w-4/12">
            <p className="text-[#D99904]">{SubHeading}</p>
            <h3 className="text-[#151515] text-4xl border-y-4">{heading}</h3>

            
        </div>
    );
};

export default SectionTitle;
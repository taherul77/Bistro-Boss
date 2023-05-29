const Button = ({children}) => {
    return (
        <button
            className="bg-[#D99904] text-white font-medium py-2 px-6 rounded-md hover:bg-black duration-500"
        >
            {children}
        </button>
    );
};

export default Button;
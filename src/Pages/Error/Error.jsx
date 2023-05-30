import { Link } from "react-router-dom";
import error from "../../assets/404.gif";

const Error = () => {
    return (
        <div>
                    <div className="flex justify-center items-center">
            <div>
                <img src={error} alt="" />
                <div className="text-center">
                    <p className="text-2xl font-semibold md:text-3xl">
                        {"Sorry, we couldn't find this page."}
                    </p>
                    <p className="mt-4 mb-8">
                        {
                            "But don't worry, you can find plenty of other things on our homepage."
                        }
                    </p>
                    <Link to={"/"}>
                    <button
            className={'border-2 bg-[#D99904]   border-l-0 border-r-0 border-transparent border-b-neutral text-neutral font-medium py-2 px-6 rounded-md transition-all hover:bg-neutral hover:text-primary'}
        >
            Go TO Home Page
        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Error;
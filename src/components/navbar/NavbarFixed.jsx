import { Link } from "react-router-dom"

const NavbarFixed = () => {
    return (
        <nav className="z-10 flex justify-between  
        w-full top-0 left-0  px-8 py-2 bg-primary">
            <div className="flex items-center gap-2 text-white">
                <svg
                    className="rotate-180"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
                <p className="text-xl text-white">Diagram</p>
            </div>
            <ul className="flex items-center text-white/50">
                <li className="px-2 text-md ">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2 text-md">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="px-2 text-md">
                    <Link to="/">Work</Link>
                </li>
            </ul>
            <div className="px-4 py-2 ml-2 text-white bg-primary rounded-full text-md ">
                <Link to="/">Login</Link>
            </div>
        </nav>
    )
}

export default NavbarFixed

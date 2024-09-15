import logo from "../assets/akLogo.png";
import {
	FaLinkedin,
	FaGithubSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from "react-icons/fa";

const Navbar = () => {
	return (
		<>
			<nav className="mb-20 flex items-center justify-between py-6">
				<div className="flex flex-shrink-0 items-center cursor-pointer">
					<img className="mx-2 w-12" src={logo} alt="logo" />
				</div>

				<div className="m-8 flex items-center justify-center gap-4 text-2xl">
					<FaLinkedin className="cursor-pointer hover:text-slate-400 ease-in duration-150" />
					<FaGithubSquare className="cursor-pointer hover:text-slate-400 ease-in duration-150" />
					<FaInstagramSquare className="cursor-pointer hover:text-slate-400 ease-in duration-150" />
					<FaTwitterSquare className="cursor-pointer hover:text-slate-400 ease-in duration-150" />
				</div>
			</nav>
		</>
	);
};

export default Navbar;

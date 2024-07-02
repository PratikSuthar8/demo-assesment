import "./Navbar.scss";
import Brand from "../../assets/img/logo.png";
const Navbar = () => {
	return (
		<nav className="nav">
			<div className="brand">
				<img src={Brand} alt="" />
			</div>
			<div className="navbar">
				<ul className="navbar-links">
					<li className="links">find suppliers</li>
					<li className="links">
						find service tags <i className="fa-solid fa-chevron-down icon"></i>
					</li>
				</ul>
				<button>Login/SignUp</button>
			</div>
		</nav>
	);
};

export default Navbar;

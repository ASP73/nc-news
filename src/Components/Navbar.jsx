import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="nav-bar-wide">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/articles">All Articles</Link>
					</li>
					<li>
						<Link to="/users">My Profile</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
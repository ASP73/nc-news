import NavBar from "./Navbar";

export default function Header() {
	return (
		<div className="header-container">
			<header>
				<h1>News App that definitely isn't Reddit</h1>
				<NavBar />
			</header>
		</div>
	);
}

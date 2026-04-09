import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact/Contact";
import ReactGA from "./ga";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";

function ScrollToHash() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const timeout = setTimeout(() => {
				const el = document.querySelector(location.hash);
				if (el) {
					el.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
			return () => clearTimeout(timeout);
		}
	}, [location.hash]);

	return null;
}
function AnalyticsTracker() {
	const location = useLocation();
	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: location.pathname });
	}, [location]);
	return null;
}
function App() {
	return (
		<BrowserRouter>
			<AnalyticsTracker />
			<ScrollToHash />
			<div className="h-full relative">
				<ThemeProvider>
					<Header />
					<SideNav />
					<div className="flex-1 ml-24 mr-4 max-sm:ml-14">
						<main className="max-w-[1100px] mx-auto pb-20">
							<section id="about" className="pt-16 scroll-mt-10">
								<Hero />
							</section>
							<section id="skills" className="pt-16 max-sm:pt-0 ">
								<Skills />
							</section>
							<section id="projects" className="pt-16 ">
								<Projects />
							</section>
							<section id="experience" className="pt-16 ">
								<Experience />
							</section>
							<section id="contact" className="pt-16 ">
								<Contact />
							</section>
						</main>
					</div>
				</ThemeProvider>
			</div>
		</BrowserRouter>
	);
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/About";
import Find from "./components/find/Find";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/how/HowItWorks";
import VideoContainer from "./components/video/VideoContainer";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<About />
				<VideoContainer />
				<Find />
				<HowItWorks />
			</main>
			<Footer />
		</>
	);
}

export default App;

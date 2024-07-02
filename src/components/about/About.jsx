import "./About.scss";
import RightArrow from "../../assets/RightArrow.svg";
const About = () => {
	return (
		<div className="about">
			<div className="about-container">
				<div className="text-box">
					<h1>
						Ready to dive into <span>HABOT?</span>
					</h1>
					<p>
						Signing up with HABOT opens the door to a world of new opportunities
						and potential for business growth. Gain access to a vibrant
						community of like-minded individuals, unlock valuable resources, and
						take the first step towards realizing your entrepreneurial dreams.
					</p>
					<button>
						Sign Up Today <img src={RightArrow} />
					</button>
				</div>
				<div className="btn-grid">
					<button>Abu Dhabi</button>
					<button>Dubai</button>
					<button>Sharjah & Ajman</button>
					<button>Fujairah</button>
					<button>Ras Al Khaimah</button>
					<button>Umm Al Quwain</button>
				</div>
			</div>
		</div>
	);
};

export default About;

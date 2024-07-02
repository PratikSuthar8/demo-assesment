import "./Hero.scss";
import hero from "../../assets/img/hero.png";
import suitCase from "../../assets/suitcase.svg";
import pin from "../../assets/pin.svg";
const Hero = () => {
	return (
		<div className="hero">
			<img src={hero} alt="" />
			<div className="hero-text">
				<p className="heading">
					<span className="heading-primary">Are Your a Supplier?</span>
					<span className="heading-secondary">
						Explore Matching opportunities
					</span>
				</p>
				<div className="input-box">
					<div className="supply">
						<img src={suitCase} />
						<input
							type="text"
							placeholder="Search your required service here"
						/>
					</div>
					<div className="supply">
						<img src={pin} />

						<input
							type="text"
							placeholder="Search your desired location here"
						/>
					</div>
					<button>Search</button>
				</div>
				<p className="seco-text">
					Are you a buyer?
					<span>Click here if you are looking to post a requirements</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;

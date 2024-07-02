import "./Footer.scss";
import Brand from "../../assets/logoWhite.svg";
import linkdin from "../../assets/linkdin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-section company">
					<div className="brand">
						<img src={Brand} alt="Logo" className="footer-logo" />
						<p>© R Singhania</p>
					</div>
					<div className="footer-links">
						<div className="footer-section links">
							<h4>Company</h4>
							<ul>
								<li>About</li>
								<li>FAQ</li>
							</ul>
						</div>
						<div className="footer-section links">
							<h4>Terms</h4>
							<ul>
								<li>Data privacy</li>
								<li>Terms</li>
								<li>Accessibility</li>
							</ul>
						</div>
						<div className="footer-section links">
							<h4>Related</h4>
							<ul>
								<li>Find Buyer</li>
								<li>Feedback</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-section social-media">
					<img src={linkdin} alt="LinkedIn" />
					<img src={twitter} alt="Twitter" />
					<img src={facebook} alt="Facebook" />
					<img src={instagram} alt="Instagram" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

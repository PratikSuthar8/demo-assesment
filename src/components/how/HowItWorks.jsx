import "./How.scss";
import document from "../../assets/document.svg";
import edit from "../../assets/edit.svg";
import layerSearch from "../../assets/layerSearch.svg";
import partner from "../../assets/partner.svg";
import quoteRequest from "../../assets/quoteRequest.svg";
import select from "../../assets/select.svg";
const HowItWorks = () => {
	return (
		<div className="how-container">
			<h1>How It Works?</h1>
			<p>
				Buyers post their needs and review top suppliers, while suppliers
				complete profiles, connect with potential buyers, and build successful
				business relationships, sharing valuable feedback.
			</p>

			<div className="grid">
				<div className="box">
					<img src={select} alt="" />
					<p>Select Your Role and Sign Up</p>
				</div>
				<div className="box">
					<img src={document} alt="" />
					<p>Buyers Post Your Requirements</p>
				</div>
				<div className="box">
					<img src={layerSearch} alt="" />
					<p> Review, Select, and Contact the Best Suppliers</p>
				</div>
				<div className="box">
					<img src={edit} alt="" />
					<p>
						{" "}
						Suppliers Complete your profile and get notified for opportunities
					</p>
				</div>
				<div className="box">
					<img src={quoteRequest} alt="" />
					<p>Select Your Role and Sign Up</p>
				</div>
				<div className="box">
					<img src={partner} alt="" />
					<p>Select Your Role and Sign Up</p>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;

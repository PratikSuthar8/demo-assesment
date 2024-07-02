import "./Video.scss";

const VideoContainer = () => {
	return (
		<div className="video-container">
			<div className="inner-container">
				<div className="video">
					<iframe
						src="https://www.youtube.com/embed/IZLp-TZyDkQ?rel=0&modestbranding=0&showinfo=0"
						allowfullscreen
						height={350}
						width={640}
					></iframe>
				</div>
				<div className="text-box">
					<div className="headers">
						<button className="buyers">Buyer</button>
						<button className="supplier">Supplier</button>
					</div>
					<div className="list">
						<ul className="list-items">
							<li className="list-links">Post your requirements.</li>
							<li className="list-links">
								Sit back for multiple suppliers to contact you.
							</li>
							<li className="list-links">
								Choose among the suppliers based on the ratings and reviews.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoContainer;

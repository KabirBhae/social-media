import React from "react";
import "./rightbar.css";

const Rightbar = () => {
	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">
					<h4 className="rightbarTitle">Online Friends</h4>
					<ul className="rightbarFriendList">
						<li className="rightbarFriend">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src="assets/person/3.jpeg"
									alt=""
								/>
								<span className="rightbarOnline"></span>
							</div>
							<span className="rightbarUsername">John Kabir</span>
						</li>
						<li className="rightbarFriend">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src="assets/person/3.jpeg"
									alt=""
								/>
								<span className="rightbarOnline"></span>
							</div>
							<span className="rightbarUsername">John Kabir</span>
						</li>
						<li className="rightbarFriend">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src="assets/person/3.jpeg"
									alt=""
								/>
								<span className="rightbarOnline"></span>
							</div>
							<span className="rightbarUsername">John Kabir</span>
						</li>
						<li className="rightbarFriend">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src="assets/person/3.jpeg"
									alt=""
								/>
								<span className="rightbarOnline"></span>
							</div>
							<span className="rightbarUsername">John Kabir</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Rightbar;

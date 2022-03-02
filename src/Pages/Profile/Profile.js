import React from "react";
import "./profile.css";

import Navbar from "../../Components/Navbar/Navbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";

export const Profile = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="profileContainer">
				<Leftbar></Leftbar>
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								src="../../../assets/post/2.jpeg"
								alt=""
								className="profileCoverImg"
							/>
							<img
								src="../../../assets/person/8.jpeg"
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">My name is Arafat</h4>
							<p className="profileInfoDesc">This is description</p>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed></Feed>
						<Rightbar></Rightbar>
					</div>
				</div>
			</div>
		</>
	);
};

import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import Feed from "../../Components/MainFeed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";

import "./home.css";

const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="homeContainer">
				<Leftbar></Leftbar>
				<Feed></Feed>
				<Rightbar></Rightbar>
			</div>
		</>
	);
};

export default Home;

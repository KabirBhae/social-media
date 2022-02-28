// import Post from "../post/Post";
import React from "react";
import Share from "../Post/Post";
import FeedContent from "../FeedContent/FeedContent";
import "./feed.css";

export default function Feed() {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				<FeedContent />
			</div>
		</div>
	);
}

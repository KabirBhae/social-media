import React from "react";
import Share from "../Post/Post";
import FeedContent from "../FeedContent/FeedContent";
import "./feed.css";

import { Contents } from "../../dummydata";

export default function Feed() {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />
				{Contents.map((c) => (
					<FeedContent key={c.id} content={c}></FeedContent>
					// console.log(c);
				))}
			</div>
		</div>
	);
}

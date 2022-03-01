import React from "react";
import "./feedContent.css";
import { MoreVert } from "@mui/icons-material";

import { Users } from "../../dummydata";

export default function FeedContent({ content }) {
	return (
		<div className="content">
			<div className="contentWrapper">
				<div className="contentTop">
					<div className="contentTopLeft">
						<img
							className="contentProfileImg"
							src={
								Users.filter((user) => user.id === content.userId)[0]
									.profilePicture
							}
							alt=""
						/>
						<span className="contentUsername">
							{Users.filter((user) => user.id === content.userId)[0].username}
						</span>
					</div>
					<div className="contentTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="contentCenter">
					<span className="contentText">{content?.desc}</span>
					<img className="contentImg" src={content.photo} alt="" />
				</div>
				<div className="contentBottom">
					<div className="contentBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="contentLikeCounter">
							{content.like} people like it
						</span>
					</div>
					<div className="contentBottomRight">
						<span className="contentCommentText">
							{content.comment} comments
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

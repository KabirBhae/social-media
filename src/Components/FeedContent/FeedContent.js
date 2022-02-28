import React from "react";
import "./feedContent.css";
import { MoreVert } from "@mui/icons-material";

export default function FeedContent() {
	return (
		<div className="content">
			<div className="contentWrapper">
				<div className="contentTop">
					<div className="contentTopLeft">
						<img
							className="contentProfileImg"
							src="./assets/person/6.jpeg"
							alt=""
						/>
						<span className="contentUsername">John Cena</span>
						<span className="contentDate">1day ago</span>
					</div>
					<div className="contentTopRight">
						<MoreVert />
					</div>
				</div>
				<div className="contentCenter">
					<span className="contentText">This is caption</span>
					<img className="contentImg" src="./assets/post/5.jpeg" alt="" />
				</div>
				<div className="contentBottom">
					<div className="contentBottomLeft">
						<img className="likeIcon" src="assets/like.png" alt="" />
						<img className="likeIcon" src="assets/heart.png" alt="" />
						<span className="contentLikeCounter">(Number) people like it</span>
					</div>
					<div className="contentBottomRight">
						<span className="contentCommentText">(Number) comments</span>
					</div>
				</div>
			</div>
		</div>
	);
}

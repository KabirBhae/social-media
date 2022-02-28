import React from "react";
import "./post.css";
import { AddToPhotos, VideoLibrary, EmojiEmotions } from "@mui/icons-material";

export default function Post() {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
					<input placeholder="What's on your mind?" className="postInput" />
				</div>
				<hr className="postHr"></hr>
				<div className="postBottom">
					<div className="postOptions">
						<div className="postOption">
							<AddToPhotos htmlColor="tomato" className="postIcon" />
							<span className="postOptionText">Add Photo</span>
						</div>
						<div className="postOption">
							<VideoLibrary htmlColor="salmon" className="postIcon" />
							<span className="postOptionText">Add Video</span>
						</div>
						<div className="postOption">
							<EmojiEmotions htmlColor="goldenrod" className="postIcon" />
							<span className="postOptionText">Feelings</span>
						</div>
					</div>
					<button className="shareButton">Post</button>
				</div>
			</div>
		</div>
	);
}
